import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { QuizHeader } from '../../quiz-ui/QuizHeader'
import { QUIZ_CONFIG_LIST, QUIZ_FILTERS } from '../utils/quizConfig'
import {
  clearQuizUser,
  getQuizUser,
  loadAllQuizProgress,
  loadQuizResults,
} from '../utils/utils'
import {
  Main,
  Hero,
  HeroCopy,
  Eyebrow,
  Title,
  Subtitle,
  Logout,
  Section,
  SectionHeader,
  SectionTitle,
  Filters,
  FilterChip,
  ContinueGrid,
  ContinueCard,
  ContinueIcon,
  ContinueBody,
  ContinueName,
  ContinueMeta,
  ContinueArrow,
  Grid,
  Card,
  TopRow,
  Icon,
  Chip,
  CardContent,
  Label,
  Description,
  MetaRow,
  Meta,
  BottomRow,
  Stats,
  StatResult,
  StatNew,
  Arrow,
} from './Home.styles'

export const Home = () => {
  const navigate = useNavigate()
  const user = useMemo(() => getQuizUser(), [])
  const currentQuiz = useMemo(() => loadQuizResults(), [])
  const quizProgress = useMemo(() => loadAllQuizProgress(), [])
  const [filter, setFilter] = useState('Todas')

  const inProgress = QUIZ_CONFIG_LIST.filter(c => quizProgress[c.key])

  const filteredCards = QUIZ_CONFIG_LIST.filter(
    c => filter === 'Todas' || c.title === filter
  )

  const handleLogout = () => {
    clearQuizUser()
    navigate('/', { replace: true })
  }

  return (
    <>
      <QuizHeader currentQuiz={currentQuiz} />
      <Main>
        <Hero>
          <HeroCopy>
            <Eyebrow>Bienvenido{user?.name ? `, ${user.name}` : ''}</Eyebrow>
            <Title>Elige tu Quiz</Title>
            <Subtitle>
              Practica a tu ritmo y revisa tu progreso en cada categoría. Tu avance se guarda
              automáticamente.
            </Subtitle>
          </HeroCopy>
          {user && (
            <Logout onClick={handleLogout}>Salir</Logout>
          )}
        </Hero>

        {inProgress.length > 0 && (
          <Section>
            <SectionTitle>Continúa donde lo dejaste</SectionTitle>
            <ContinueGrid>
              {inProgress.map(card => (
                <ContinueCard
                  key={card.key}
                  to={card.path}
                  $accent={card.accent}
                  aria-label={`Continuar quiz de ${card.title}`}
                >
                  <ContinueIcon $accent={card.accent}>
                    <card.icon />
                  </ContinueIcon>
                  <ContinueBody>
                    <ContinueName>{card.title}</ContinueName>
                    <ContinueMeta>
                      Pregunta {quizProgress[card.key].page + 1} de {card.questions.length}
                    </ContinueMeta>
                  </ContinueBody>
                  <ContinueArrow $accent={card.accent}>Continuar →</ContinueArrow>
                </ContinueCard>
              ))}
            </ContinueGrid>
          </Section>
        )}

        <Section>
          <SectionHeader>
            <SectionTitle>Todos los quizzes</SectionTitle>
            <Filters aria-label="Filtrar por categoría">
              {QUIZ_FILTERS.map(label => (
                <FilterChip
                  key={label}
                  $active={filter === label}
                  onClick={() => setFilter(label)}
                  aria-pressed={filter === label}
                >
                  {label}
                </FilterChip>
              ))}
            </Filters>
          </SectionHeader>

          <Grid>
            {filteredCards.map(card => (
                <Card
                  to={card.previewPath}
                  key={card.key}
                  $accent={card.accent}
                  aria-label={`Ver quiz de ${card.title}`}
                >
                  <TopRow>
                    <Icon $accent={card.accent}>
                      <card.icon />
                    </Icon>
                    <Chip $accent={card.accent}>{card.difficulty}</Chip>
                  </TopRow>

                  <CardContent>
                    <Label>{card.title}</Label>
                    <Description>{card.description}</Description>
                  </CardContent>

                  <MetaRow>
                    <Meta>{card.questions.length} preguntas</Meta>
                  </MetaRow>

                  <BottomRow>
                    <Stats aria-label="Estado del quiz">
                      {currentQuiz[card.key] ? (
                        <StatResult $accent={card.accent}>
                          Mejor puntaje: <strong>{currentQuiz[card.key].total}%</strong>
                        </StatResult>
                      ) : (
                        <StatNew $accent={card.accent}>Nuevo</StatNew>
                      )}
                    </Stats>

                    <Arrow $accent={card.accent}>Ver quiz →</Arrow>
                  </BottomRow>
                </Card>
              ))}
          </Grid>
        </Section>
      </Main>
    </>
  )
}