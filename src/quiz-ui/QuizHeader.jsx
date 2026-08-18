import { useMemo } from 'react'
import { LogoMark } from './icons'
import {
  Header,
  HeaderInner,
  Left,
  Brand,
  Logo,
  BrandName,
  Right,
  ScoreRow,
  ScoreText,
  ScoreStrong,
  Percent,
  ProgressBar,
  ProgressFill,
} from './QuizHeader.styles'
import { TOTAL_QUIZ, TOTAL_QUESTION } from '../quiz/utils/constants'

export const QuizHeader = ({ currentQuiz }) => {
  const totalQuestions = TOTAL_QUIZ.length * TOTAL_QUESTION

  const score = Object.values(currentQuiz).reduce((acc, { correct }) => acc + correct, 0)

  const progress = (score / totalQuestions) * 100 || 0
  const progressLabel = useMemo(() => `${Math.round(progress)}%`, [progress])

  return (
    <Header>
      <HeaderInner>
        <Left>
          <Brand>
            <Logo>
              <LogoMark />
            </Logo>
            <BrandName>Quizly</BrandName>
          </Brand>
        </Left>

        <Right>
          <ScoreRow>
            <ScoreText>
              <ScoreStrong>{score}</ScoreStrong> / {totalQuestions} preguntas
            </ScoreText>
            <Percent aria-label="Porcentaje de progreso">{progressLabel}</Percent>
          </ScoreRow>

          <ProgressBar aria-label="Barra de progreso global">
            <ProgressFill style={{ width: `${progress}%` }} />
          </ProgressBar>
        </Right>
      </HeaderInner>
    </Header>
  )
}