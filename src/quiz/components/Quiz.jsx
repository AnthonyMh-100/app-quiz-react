import { MultiPageQuiz } from '../../quiz-ui/MultiPageQuiz'
import { BackLink } from '../../quiz-ui/BackLink'
import { useState, useEffect, useMemo } from 'react'
import { useQuizMultiPageData } from '../hooks/useQuizMultiPageData'
import {
  calculateQuizResult,
  clearQuizProgress,
  hasAnsweredPage,
  loadQuizAttempts,
  loadQuizProgress,
  saveQuizAttempt,
  saveQuizDataToLocalStorage,
  saveQuizProgress,
} from '../utils/utils'
import { useNavigate } from 'react-router'
import { QuizResults } from './QuizResults'
import { Container } from './Quiz.styles'

export const Quiz = ({ config }) => {
  const { key, title, accent, questions } = config
  const [page, setPage] = useState(0)
  const { quizData, setQuizData } = useQuizMultiPageData()
  const [result, setResult] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const progress = loadQuizProgress(key)
    if (progress) {
      setQuizData(progress.answers)
      setPage(progress.page)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSelectOption = option => {
    const next = {
      ...quizData,
      [questions[page].id]: { id: questions[page].id, page, option },
    }
    setQuizData(next)
    saveQuizProgress(key, { answers: next, page })
  }

  const hasAnsweredCurrentPage = useMemo(
    () => hasAnsweredPage({ quizData, page }),
    [quizData, page]
  )

  const handleFinish = () => {
    const res = calculateQuizResult({ quizData, quizSource: questions })
    setResult(res)
    clearQuizProgress(key)
    saveQuizDataToLocalStorage({ data: res, key, quizKey: 'quizData' })
    saveQuizAttempt(key, res.total)
  }

  const handleRetry = () => {
    setQuizData({})
    setPage(0)
    setResult(null)
  }

  if (result) {
    return (
      <QuizResults
        config={config}
        result={result}
        quizData={quizData}
        attempts={loadQuizAttempts()[key]}
        onRetry={handleRetry}
        onHome={() => navigate('/home')}
      />
    )
  }

  return (
    <Container $accent={accent}>
      <BackLink onClick={() => navigate('/home')}>← Inicio</BackLink>

      <MultiPageQuiz
        answerData={quizData}
        data={questions}
        pageIndex={page}
        setPage={() => setPage(page + 1)}
        setPrev={() => setPage(page - 1)}
        hasAnsweredCurrentPage={hasAnsweredCurrentPage}
        onSelectOption={handleSelectOption}
        titleName={title}
        onFinish={handleFinish}
      />
    </Container>
  )
}