import { useMemo } from 'react'
import { useNavigate } from 'react-router'
import { loadQuizResults } from '../utils/utils'
import { BackLink } from '../../quiz-ui/BackLink'
import {
  Page,
  Card,
  TopRow,
  Icon,
  Chip,
  Title,
  Description,
  MetaList,
  Meta,
  MetaValue,
  BestResult,
  Buttons,
  Button,
} from './QuizPreview.styles'

export const QuizPreview = ({ config }) => {
  const { key, title, description, icon: IconComponent, accent, questions, difficulty, path } =
    config
  const navigate = useNavigate()

  const bestResult = useMemo(() => loadQuizResults()[key] || null, [key])

  return (
    <Page $accent={accent}>
      <BackLink onClick={() => navigate('/home')}>← Volver</BackLink>

      <Card $accent={accent}>
        <TopRow>
          <Icon $accent={accent}>
            <IconComponent />
          </Icon>
          <Chip $accent={accent}>Quiz</Chip>
        </TopRow>

        <Title>{title}</Title>
        <Description>{description}</Description>

        <MetaList>
          <Meta>
            <MetaValue>{questions.length}</MetaValue> preguntas
          </Meta>
          <Meta>
            Dificultad <MetaValue>{difficulty}</MetaValue>
          </Meta>
        </MetaList>

        {bestResult && (
          <BestResult $accent={accent}>
            Tu mejor resultado: <strong>{bestResult.total}%</strong>
          </BestResult>
        )}

        <Buttons>
          <Button $variant="ghost" onClick={() => navigate('/home')}>
            Inicio
          </Button>
          <Button $variant="primary" onClick={() => navigate(path)}>
            Comenzar quiz
          </Button>
        </Buttons>
      </Card>
    </Page>
  )
}