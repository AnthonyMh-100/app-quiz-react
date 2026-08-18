import { CheckIcon, CrossIcon } from './icons'
import {
  ContainerQuiz,
  Header,
  Progress,
  Title,
  Question,
  Options,
  Option,
  Letter,
  OptionText,
  StatusSlot,
  Feedback,
} from './QuizForm.styles'

export const QuizForm = ({ selectedOption, correctAnswer, title, question, options, onClick }) => {
  const hasAnswered = Boolean(selectedOption)
  const isCorrect = hasAnswered && selectedOption === correctAnswer

  return (
    <ContainerQuiz role="radiogroup" aria-label={`Pregunta de ${title}`}>
      <Header>
        <Title>{title}</Title>
        <Progress>{hasAnswered ? (isCorrect ? '¡Correcto!' : 'Incorrecto') : 'Elige una opción'}</Progress>
      </Header>

      <Question>{question}</Question>

      <Options>
        {options?.map((option, index) => {
          const selected = option === selectedOption
          const isRightOption = option === correctAnswer
          const showCorrect = hasAnswered && isRightOption
          const showWrong = hasAnswered && selected && !isRightOption

          return (
            <Option
              key={index}
              type="button"
              onClick={() => onClick(option)}
              $state={showCorrect ? 'correct' : showWrong ? 'wrong' : selected ? 'selected' : 'idle'}
              aria-pressed={selected}
            >
              <Letter
                $state={showCorrect ? 'correct' : showWrong ? 'wrong' : selected ? 'selected' : 'idle'}
              >
                {String.fromCharCode(65 + index)}
              </Letter>
              <OptionText>{option}</OptionText>
              {showCorrect && (
                <StatusSlot $state="correct">
                  <CheckIcon />
                </StatusSlot>
              )}
              {showWrong && (
                <StatusSlot $state="wrong">
                  <CrossIcon />
                </StatusSlot>
              )}
            </Option>
          )
        })}
      </Options>

      {hasAnswered && (
        <Feedback $state={isCorrect ? 'correct' : 'wrong'} role="status">
          {isCorrect ? '¡Correcto! 🎉' : `Incorrecto — Respuesta correcta: ${correctAnswer}`}
        </Feedback>
      )}
    </ContainerQuiz>
  )
}