import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(320px, 0.9fr) 1.1fr;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

export const SidePanel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  background:
    radial-gradient(circle at 15% 12%, rgba(255, 255, 255, 0.28), transparent 45%),
    radial-gradient(circle at 90% 85%, rgba(15, 23, 42, 0.18), transparent 50%),
    var(--gradient-primary);
  overflow: hidden;

  @media (max-width: 860px) {
    padding: 28px 24px;
  }
`

export const SideInner = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  color: #ffffff;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Logo = styled.div`
  width: 46px;
  height: 46px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.18);
`

export const BrandName = styled.span`
  font-size: 22px;
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.02em;
`

export const SideCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SideTitle = styled.h2`
  margin: 0;
  font-size: clamp(24px, 2.4vw, 32px);
  font-weight: var(--font-weight-extrabold);
  line-height: 1.15;
  letter-spacing: -0.02em;
`

export const SideText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
`

export const FloatingCard = styled.div`
  padding: 18px 20px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.22);

  @media (max-width: 860px) {
    display: none;
  }
`

export const FloatingLabel = styled.span`
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.8);
`

export const FloatingValue = styled.span`
  font-size: 26px;
  font-weight: var(--font-weight-extrabold);
`

export const FloatingBar = styled.div`
  height: 6px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.25);
  overflow: hidden;
`

export const FloatingFill = styled.div`
  height: 100%;
  width: 72%;
  border-radius: var(--radius-full);
  background: #ffffff;
`

export const FormPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background:
    radial-gradient(circle at top, #eef2ff 0%, #f8fafc 40%),
    linear-gradient(to bottom, #f8fafc, #ffffff);
`

export const FormContent = styled.div`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Eyebrow = styled.span`
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-primary-600);
`

export const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  letter-spacing: -0.02em;
`

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.5;
`

export const Stepper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`

export const StepItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const StepDot = styled.div`
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  background: ${({ $done, $active }) => {
    if ($done || $active) return 'var(--gradient-primary)'
    return 'var(--color-surface)'
  }};
  color: ${({ $done, $active }) => ($done || $active ? '#ffffff' : 'var(--color-text-muted)')};
  border: 2px solid
    ${({ $done, $active }) =>
      $done || $active ? 'transparent' : 'var(--color-border-strong)'};
  box-shadow: ${({ $active }) => ($active ? 'var(--shadow-primary)' : 'none')};
`

export const StepNumber = styled.span`
  font-weight: var(--font-weight-bold);
`

export const StepLabel = styled.span`
  font-size: 12px;
  font-weight: ${({ $active }) =>
    $active ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)'};
  color: ${({ $active }) => ($active ? 'var(--color-text)' : 'var(--color-text-muted)')};
`

export const ContainerForm = styled.form`
  padding: 32px 28px;
  background-color: var(--color-surface);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`

export const Button = styled.button`
  padding: 13px 24px;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background 0.16s ease,
    border-color 0.16s ease;

  background: ${({ $variant, disabled }) => {
    if ($variant === 'primary') {
      if (disabled) return '#e5e7eb'
      return 'var(--gradient-primary)'
    }
    return 'var(--color-surface)'
  }};
  color: ${({ $variant, disabled }) => {
    if ($variant === 'primary') return disabled ? '#9ca3af' : '#ffffff'
    return 'var(--color-text-secondary)'
  }};
  border-color: ${({ $variant }) =>
    $variant === 'primary' ? 'transparent' : 'var(--color-border)'};
  box-shadow: ${({ $variant, disabled }) =>
    $variant === 'primary' && !disabled ? 'var(--shadow-primary)' : 'var(--shadow-sm)'};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: ${({ $variant }) =>
      $variant === 'primary'
        ? 'linear-gradient(135deg, #4f46e5, #6366f1)'
        : 'var(--color-surface-muted)'};
    box-shadow: ${({ $variant }) =>
      $variant === 'primary' ? 'var(--shadow-primary-lg)' : 'var(--shadow-md)'};
  }

  &:focus-visible {
    outline: 3px solid var(--color-primary-100);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled) {
      transform: none;
    }
  }
`