import { useMemo } from 'react'
import { LogoMark, CheckIcon } from './icons'
import {
  Container,
  SidePanel,
  SideInner,
  Brand,
  Logo,
  BrandName,
  SideCopy,
  SideTitle,
  SideText,
  FloatingCard,
  FloatingLabel,
  FloatingValue,
  FloatingBar,
  FloatingFill,
  FormPanel,
  FormContent,
  Header,
  Eyebrow,
  Title,
  Description,
  Stepper,
  StepItem,
  StepDot,
  StepNumber,
  StepLabel,
  ContainerForm,
  ButtonGroup,
  Button,
} from './FormTabs.styles'

const STEPS = [
  { label: 'Nombre' },
  { label: 'Correo' },
  { label: 'Clave' },
]

export const FormTabs = ({
  data,
  defaultPage,
  setPage,
  isDisabledButton,
  onBack,
  onSubmit,
}) => {
  const isLastPage = useMemo(
    () => defaultPage === data.length - 1,
    [defaultPage, data.length]
  )

  return (
    <Container>
      <SidePanel aria-hidden="true">
        <SideInner>
          <Brand>
            <Logo>
              <LogoMark variant="light" />
            </Logo>
            <BrandName>Quizly</BrandName>
          </Brand>

          <SideCopy>
            <SideTitle>Crea tu cuenta y empieza a practicar</SideTitle>
            <SideText>
              Resuelve quizzes por categorías, mide tu progreso y mejora tus habilidades a tu
              propio ritmo.
            </SideText>
          </SideCopy>

          <FloatingCard>
            <FloatingLabel>Progreso global</FloatingLabel>
            <FloatingValue>72%</FloatingValue>
            <FloatingBar>
              <FloatingFill />
            </FloatingBar>
          </FloatingCard>
        </SideInner>
      </SidePanel>

      <FormPanel>
        <FormContent>
          <Header>
            <Eyebrow>
              Paso {defaultPage + 1} de {data.length}
            </Eyebrow>
            <Title>Información personal</Title>
            <Description>
              Completa los siguientes datos para continuar con el formulario.
            </Description>
          </Header>

          <Stepper>
            {data.map((_, index) => (
              <StepItem key={index} $active={index === defaultPage} $done={index < defaultPage}>
                <StepDot $active={index === defaultPage} $done={index < defaultPage}>
                  {index < defaultPage ? (
                    <CheckIcon size={12} />
                  ) : (
                    <StepNumber>{index + 1}</StepNumber>
                  )}
                </StepDot>
                <StepLabel $active={index === defaultPage}>{STEPS[index].label}</StepLabel>
              </StepItem>
            ))}
          </Stepper>

          <ContainerForm onSubmit={onSubmit}>
            {data[defaultPage].component}

            <ButtonGroup>
              {isLastPage && (
                <Button $variant="ghost" type="button" onClick={onBack}>
                  Volver
                </Button>
              )}

              {!isLastPage ? (
                <Button
                  $variant="primary"
                  type="button"
                  onClick={() => setPage(prev => prev + 1)}
                >
                  Continuar
                </Button>
              ) : (
                <Button $variant="primary" disabled={!isDisabledButton}>
                  Ingresar
                </Button>
              )}
            </ButtonGroup>
          </ContainerForm>
        </FormContent>
      </FormPanel>
    </Container>
  )
}