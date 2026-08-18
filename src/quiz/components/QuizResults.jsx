import { BackLink } from '../../quiz-ui/BackLink'
import {
  Page,
  Card,
  Eyebrow,
  RingWrap,
  Ring,
  RingTrack,
  RingProgress,
  RingCenter,
  RingValue,
  RingLabel,
  Summary,
  SummaryPill,
  Attempts,
  ReviewTitle,
  ReviewList,
  ReviewItem,
  ReviewHeader,
  ReviewNumber,
  ReviewQuestion,
  ReviewAnswers,
  ReviewAnswer,
  Buttons,
  Button,
} from './QuizResults.styles'

const RADIUS = 52
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export const QuizResults = ({ config, result, quizData, attempts, onRetry, onHome }) => {
  const { key, title, accent, questions } = config
  const total = result?.total || 0
  const correct = result?.correct || 0
  const wrong = result?.wrong || 0

  const bestAttempt = attempts?.length ? Math.max(...attempts.map(a => a.total)) : null

  const dashOffset = CIRCUMFERENCE - (total / 100) * CIRCUMFERENCE

  return (
    <Page $accent={accent}>
      <BackLink onClick={onHome}>← Volver al inicio</BackLink>

      <Card $accent={accent}>
        <Eyebrow $accent={accent}>Quiz de {title}</Eyebrow>

        <RingWrap>
          <Ring viewBox="0 0 120 120">
            <defs>
              <linearGradient id={`ring-grad-${key}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6366f1" />
                <stop offset="1" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <RingTrack cx="60" cy="60" r={RADIUS} />
            <RingProgress
              cx="60"
              cy="60"
              r={RADIUS}
              stroke={`url(#ring-grad-${key})`}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
            />
          </Ring>
          <RingCenter>
            <RingValue>{total}%</RingValue>
            <RingLabel>puntaje</RingLabel>
          </RingCenter>
        </RingWrap>

        <Summary>
          <SummaryPill $state="correct">
            ✔ {correct} correcta{correct !== 1 ? 's' : ''}
          </SummaryPill>
          <SummaryPill $state="wrong">
            ✖ {wrong} incorrecta{wrong !== 1 ? 's' : ''}
          </SummaryPill>
        </Summary>

        {bestAttempt !== null && (
          <Attempts>
            Mejor puntaje: <strong>{bestAttempt}%</strong> · {attempts.length}{' '}
            intento{attempts.length !== 1 ? 's' : ''}
          </Attempts>
        )}

        <ReviewTitle>Repaso de respuestas</ReviewTitle>

        <ReviewList>
          {questions.map((q, index) => {
            const userOption = quizData?.[q.id]?.option
            const ok = userOption === q.correctAnswer

            return (
              <ReviewItem key={q.id}>
                <ReviewHeader>
                  <ReviewNumber $accent={accent}>{index + 1}</ReviewNumber>
                  <ReviewQuestion>{q.title}</ReviewQuestion>
                </ReviewHeader>

                <ReviewAnswers>
                  <ReviewAnswer $state={ok ? 'correct' : 'wrong'}>
                    {ok ? '✔' : '✖'} Tu respuesta: {userOption || 'Sin responder'}
                  </ReviewAnswer>
                  {!ok && (
                    <ReviewAnswer $state="correct">✔ Correcta: {q.correctAnswer}</ReviewAnswer>
                  )}
                </ReviewAnswers>
              </ReviewItem>
            )
          })}
        </ReviewList>

        <Buttons>
          <Button $variant="ghost" onClick={onHome}>
            Volver al inicio
          </Button>
          <Button $variant="primary" onClick={onRetry}>
            Reintentar
          </Button>
        </Buttons>
      </Card>
    </Page>
  )
}