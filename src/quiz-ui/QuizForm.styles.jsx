import { styled } from 'styled-components'

export const ContainerQuiz = styled.div`
  width: 100%;
  max-width: 640px;
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: clamp(18px, 3vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Progress = styled.span`
  font-size: 13px;
  font-weight: var(--font-weight-semibold);
  padding: 6px 10px;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
`

export const Title = styled.h1`
  font-size: clamp(18px, 2vw, 22px);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.01em;
`

export const Question = styled.p`
  font-size: clamp(14px, 1.5vw, 16px);
  color: var(--color-text-secondary);
  text-align: left;
  margin: 4px 0 0;
  line-height: 1.45;
`

export const Options = styled.div`
  display: grid;
  gap: 12px;
`

export const Option = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background 0.16s ease,
    border-color 0.16s ease;

  min-height: 52px;
  word-break: break-word;

  background: ${({ $state }) => {
    if ($state === 'correct') return 'var(--color-success-bg)'
    if ($state === 'wrong') return 'var(--color-danger-bg)'
    if ($state === 'selected') return 'var(--color-primary-50)'
    return 'var(--color-surface)'
  }};
  border: 1.5px solid
    ${({ $state }) => {
      if ($state === 'correct') return 'var(--color-success-text)'
      if ($state === 'wrong') return 'var(--color-danger-text)'
      if ($state === 'selected') return 'var(--color-primary-500)'
      return 'var(--color-border)'
    }};
  box-shadow: ${({ $state }) =>
    $state === 'correct'
      ? '0 6px 16px rgba(4, 120, 87, 0.18)'
      : $state === 'wrong'
        ? '0 6px 16px rgba(185, 28, 28, 0.16)'
        : $state === 'selected'
          ? 'var(--shadow-primary)'
          : 'var(--shadow-sm)'};

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: default;
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

export const Letter = styled.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: var(--font-weight-bold);
  border: 1px solid transparent;
  transition:
    background 0.16s ease,
    color 0.16s ease;

  background: ${({ $state }) => {
    if ($state === 'correct') return 'var(--color-success-text)'
    if ($state === 'wrong') return 'var(--color-danger-text)'
    if ($state === 'selected') return 'var(--gradient-primary)'
    return 'var(--color-surface-muted)'
  }};
  color: ${({ $state }) =>
    $state === 'idle' ? 'var(--color-text-muted)' : '#ffffff'};
  border-color: ${({ $state }) =>
    $state === 'idle' ? 'var(--color-border)' : 'transparent'};
`

export const OptionText = styled.span`
  flex: 1;
`

export const StatusSlot = styled.span`
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  background: ${({ $state }) =>
    $state === 'correct' ? 'var(--color-success-text)' : 'var(--color-danger-text)'};
`

export const Feedback = styled.div`
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: var(--font-weight-semibold);

  background: ${({ $state }) =>
    $state === 'correct' ? 'var(--color-success-bg)' : 'var(--color-danger-bg)'};
  color: ${({ $state }) =>
    $state === 'correct' ? 'var(--color-success-text)' : 'var(--color-danger-text)'};
  border: 1px solid
    ${({ $state }) =>
      $state === 'correct' ? 'var(--color-success-border)' : 'var(--color-danger-border)'};
`