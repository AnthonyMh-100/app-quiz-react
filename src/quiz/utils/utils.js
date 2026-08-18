export const calculateQuizResult = ({ quizData, quizSource }) => {
  return quizSource.reduce(
    (acc, { id: quizId, correctAnswer }) => {
      const quizAnswer = quizData[quizId]?.option

      if (!quizAnswer) return acc

      if (quizAnswer === correctAnswer) acc.correct += 1
      else acc.wrong += 1

      const totalAnswered = acc.correct + acc.wrong
      acc.total = Math.ceil((acc.correct / totalAnswered) * 100)

      return acc
    },
    {
      correct: 0,
      wrong: 0,
      total: 0,
    }
  )
}

export const hasAnsweredPage = ({ quizData, page }) => {
  return Object.values(quizData).some(({ page: pageQuiz }) => pageQuiz === page)
}
export const saveQuizDataToLocalStorage = ({ data, key, quizKey }) => {
  const storedData = localStorage.getItem(quizKey)

  const parsedData = storedData ? JSON.parse(storedData) : {}

  const newData = {
    ...parsedData,
    [key]: data,
  }

  localStorage.setItem(quizKey, JSON.stringify(newData))
}

const QUIZ_PROGRESS_KEY = 'quizProgress'
const QUIZ_USER_KEY = 'quizUser'
const QUIZ_RESULTS_KEY = 'quizData'

export const loadQuizResults = () => {
  const storedData = localStorage.getItem(QUIZ_RESULTS_KEY)
  return storedData ? JSON.parse(storedData) : {}
}

export const loadAllQuizProgress = () => {
  const storedData = localStorage.getItem(QUIZ_PROGRESS_KEY)
  return storedData ? JSON.parse(storedData) : {}
}

export const loadQuizProgress = quizKey => {
  const storedData = localStorage.getItem(QUIZ_PROGRESS_KEY)
  const parsed = storedData ? JSON.parse(storedData) : {}
  return parsed[quizKey] || null
}

export const saveQuizProgress = (quizKey, progress) => {
  const storedData = localStorage.getItem(QUIZ_PROGRESS_KEY)
  const parsed = storedData ? JSON.parse(storedData) : {}
  localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify({ ...parsed, [quizKey]: progress }))
}

export const clearQuizProgress = quizKey => {
  const storedData = localStorage.getItem(QUIZ_PROGRESS_KEY)
  const parsed = storedData ? JSON.parse(storedData) : {}
  delete parsed[quizKey]
  localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(parsed))
}

export const getQuizUser = () => {
  const storedData = localStorage.getItem(QUIZ_USER_KEY)
  return storedData ? JSON.parse(storedData) : null
}

export const saveQuizUser = user => {
  localStorage.setItem(QUIZ_USER_KEY, JSON.stringify(user))
}

export const clearQuizUser = () => {
  localStorage.removeItem(QUIZ_USER_KEY)
}

const QUIZ_ATTEMPTS_KEY = 'quizAttempts'

export const loadQuizAttempts = () => {
  const storedData = localStorage.getItem(QUIZ_ATTEMPTS_KEY)
  return storedData ? JSON.parse(storedData) : {}
}

export const saveQuizAttempt = (quizKey, total) => {
  const stored = loadQuizAttempts()
  const list = stored[quizKey] || []
  const next = [...list, { total, date: Date.now() }]
  localStorage.setItem(QUIZ_ATTEMPTS_KEY, JSON.stringify({ ...stored, [quizKey]: next }))
}

export default {
  calculateQuizResult,
  hasAnsweredPage,
  saveQuizDataToLocalStorage,
  loadQuizResults,
  loadAllQuizProgress,
  loadQuizProgress,
  saveQuizProgress,
  clearQuizProgress,
  getQuizUser,
  saveQuizUser,
  clearQuizUser,
  loadQuizAttempts,
  saveQuizAttempt,
}
