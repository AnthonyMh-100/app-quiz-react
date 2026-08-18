import { useMemo } from 'react'
import { QuizForm } from './QuizForm'
import {
  Container,
  Content,
  TopBar,
  ProgressPill,
  ProgressNumber,
  Hint,
  ProgressTrack,
  ProgressFill,
  ContainerButton,
  Button,
} from './MultiPageQuiz.styles'

export const MultiPageQuiz = ({
  answerData,
  data,
  pageIndex,
  setPage,
  setPrev,
  hasAnsweredCurrentPage,
  onSelectOption,
  titleName,
  onFinish,
}) => {
  const { id, title, options } = useMemo(() => data[pageIndex], [data, pageIndex])

  const { isFirstPage, isLastPage } = useMemo(() => {
    return {
      isLastPage: pageIndex === data.length - 1,
      isFirstPage: pageIndex === 0,
    }
  }, [data, pageIndex])

  const progressPercent = useMemo(
    () => ((pageIndex + 1) / data.length) * 100,
    [pageIndex, data.length]
  )

  return (
    <Container>
      <Content>
        <TopBar aria-label="Progreso del quiz">
          <ProgressPill>
            Pregunta <ProgressNumber>{pageIndex + 1}</ProgressNumber> de{' '}
            <ProgressNumber>{data.length}</ProgressNumber>
          </ProgressPill>
          <Hint>Selecciona una opción para continuar</Hint>
        </TopBar>

        <ProgressTrack aria-hidden="true">
          <ProgressFill style={{ width: `${progressPercent}%` }} />
        </ProgressTrack>

        <QuizForm
          key={id}
          selectedOption={answerData?.[id]?.option}
          correctAnswer={data[pageIndex].correctAnswer}
          title={titleName}
          question={title}
          options={options}
          onClick={onSelectOption}
        />

        <ContainerButton>
          {!isFirstPage && (
            <Button type="button" $variant="secondary" onClick={setPrev}>
              Anterior
            </Button>
          )}

          {isLastPage ? (
            <Button
              type="button"
              $variant="primary"
              onClick={onFinish}
              disabled={!hasAnsweredCurrentPage}
            >
              Ver resultados
            </Button>
          ) : (
            <Button
              type="button"
              $variant="primary"
              onClick={setPage}
              disabled={!hasAnsweredCurrentPage}
            >
              Siguiente
            </Button>
          )}
        </ContainerButton>
      </Content>
    </Container>
  )
}