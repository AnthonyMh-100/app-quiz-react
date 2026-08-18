import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 28px 16px 44px;
  background:
    radial-gradient(circle at top, #eef2ff 0%, #f8fafc 42%),
    linear-gradient(to bottom, #f8fafc, #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    justify-content: flex-start;
    padding-top: 22px;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 14px;

  @media (min-width: 640px) {
    transform: translateY(-26px);
  }

  @media (max-width: 639px) {
    transform: none;
  }
`

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ProgressPill = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 8px 12px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(99, 102, 241, 0.18);
  box-shadow: var(--shadow-sm);
  color: var(--color-text);
  font-size: 13px;
`

export const ProgressNumber = styled.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-600);
`

export const Hint = styled.span`
  font-size: 13px;
  color: var(--color-text-muted);
`

export const ProgressTrack = styled.div`
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--color-border);
  overflow: hidden;
`

export const ProgressFill = styled.div`
  height: 100%;
  border-radius: var(--radius-full);
  background: var(--gradient-primary);
  transition: width 0.4s ease;
`

export const Button = styled.button`
  flex: 1;
  padding: 14px 18px;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  font-weight: var(--font-weight-semibold);
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease;

  background: ${({ disabled, $variant }) => {
    if (disabled) return 'var(--color-border)'
    if ($variant === 'primary') return 'var(--gradient-primary)'
    return 'var(--color-surface)'
  }};

  color: ${({ disabled, $variant }) => {
    if (disabled) return 'var(--color-text-disabled)'
    if ($variant === 'primary') return '#ffffff'
    return 'var(--color-text-secondary)'
  }};

  box-shadow: ${({ disabled, $variant }) =>
    disabled
      ? 'none'
      : $variant === 'primary'
        ? 'var(--shadow-primary)'
        : 'var(--shadow-sm)'};

  border-color: ${({ disabled, $variant }) => {
    if (disabled) return 'transparent'
    if ($variant === 'primary') return 'rgba(99, 102, 241, 0.35)'
    return 'var(--color-border)'
  }};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: ${({ $variant }) =>
      $variant === 'primary'
        ? 'linear-gradient(135deg, #4f46e5, #6366f1)'
        : 'var(--color-surface-muted)'};
    box-shadow: ${({ $variant }) =>
      $variant === 'primary' ? 'var(--shadow-primary-lg)' : 'var(--shadow-md)'};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid var(--color-primary-100);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled) {
      transform: none;
    }
  }
`