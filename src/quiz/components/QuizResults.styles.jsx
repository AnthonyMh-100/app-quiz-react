import { styled } from 'styled-components'

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 72px 24px 40px;
  box-sizing: border-box;
  background:
    radial-gradient(circle at 15% 10%, ${({ $accent }) => $accent.glow}, transparent 45%),
    radial-gradient(circle at top, #eef2ff 0%, #f8fafc 40%),
    linear-gradient(to bottom, #f8fafc, #ffffff);
`

export const Card = styled.div`
  width: 100%;
  max-width: 560px;
  background: var(--color-surface);
  border-radius: var(--radius-2xl);
  border: 1px solid ${({ $accent }) => $accent.border};
  box-shadow: var(--shadow-lg);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`

export const Eyebrow = styled.span`
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ $accent }) => $accent.text};
`

export const RingWrap = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
`

export const Ring = styled.svg`
  width: 100%;
  height: 100%;
`

export const RingTrack = styled.circle`
  fill: none;
  stroke: var(--color-border);
  stroke-width: 12;
`

export const RingProgress = styled.circle`
  fill: none;
  stroke-width: 12;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 60px 60px;
  transition: stroke-dashoffset 0.8s ease;
`

export const RingCenter = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`

export const RingValue = styled.span`
  font-size: 34px;
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text);
  letter-spacing: -0.02em;
`

export const RingLabel = styled.span`
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-muted);
`

export const Summary = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`

export const SummaryPill = styled.span`
  font-size: 13px;
  font-weight: var(--font-weight-semibold);
  padding: 8px 14px;
  border-radius: var(--radius-full);
  display: inline-flex;
  align-items: center;
  gap: 6px;

  background: ${({ $state }) =>
    $state === 'correct' ? 'var(--color-success-bg)' : 'var(--color-danger-bg)'};
  color: ${({ $state }) =>
    $state === 'correct' ? 'var(--color-success-text)' : 'var(--color-danger-text)'};
  border: 1px solid
    ${({ $state }) =>
      $state === 'correct' ? 'var(--color-success-border)' : 'var(--color-danger-border)'};
`

export const Attempts = styled.p`
  margin: 0;
  font-size: 13px;
  color: var(--color-text-muted);

  strong {
    font-weight: var(--font-weight-bold);
    color: var(--color-text);
  }
`

export const ReviewTitle = styled.h2`
  margin: 8px 0 0;
  align-self: flex-start;
  font-size: 16px;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
`

export const ReviewList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ReviewItem = styled.div`
  padding: 16px;
  border-radius: var(--radius-md);
  background: var(--color-surface-muted);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ReviewHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`

export const ReviewNumber = styled.span`
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: var(--radius-sm);
  background: ${({ $accent }) => $accent.gradient};
  color: #ffffff;
  font-size: 13px;
  font-weight: var(--font-weight-bold);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ReviewQuestion = styled.span`
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  line-height: 1.4;
`

export const ReviewAnswers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ReviewAnswer = styled.span`
  font-size: 13px;
  line-height: 1.4;
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  background: ${({ $state }) =>
    $state === 'correct' ? 'var(--color-success-bg)' : 'var(--color-danger-bg)'};
  color: ${({ $state }) =>
    $state === 'correct' ? 'var(--color-success-text)' : 'var(--color-danger-text)'};
  border: 1px solid
    ${({ $state }) =>
      $state === 'correct' ? 'var(--color-success-border)' : 'var(--color-danger-border)'};
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`

export const Button = styled.button`
  flex: 1;
  padding: 13px 18px;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background-color 0.16s ease;

  background-color: ${({ $variant }) =>
    $variant === 'primary' ? 'var(--color-primary-600)' : 'var(--color-surface)'};
  color: ${({ $variant }) =>
    $variant === 'primary' ? '#ffffff' : 'var(--color-text-secondary)'};
  border-color: ${({ $variant }) =>
    $variant === 'primary' ? 'transparent' : 'var(--color-border)'};
  box-shadow: ${({ $variant }) =>
    $variant === 'primary' ? 'var(--shadow-primary)' : 'var(--shadow-sm)'};

  &:hover {
    transform: translateY(-2px);
    background-color: ${({ $variant }) =>
      $variant === 'primary' ? 'var(--color-primary-700)' : 'var(--color-surface-muted)'};
    box-shadow: ${({ $variant }) =>
      $variant === 'primary' ? 'var(--shadow-primary-lg)' : 'var(--shadow-md)'};
  }

  &:focus-visible {
    outline: 3px solid var(--color-primary-100);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`