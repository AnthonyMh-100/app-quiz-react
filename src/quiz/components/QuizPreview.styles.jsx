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
  max-width: 460px;
  background: var(--color-surface);
  border-radius: var(--radius-2xl);
  border: 1px solid ${({ $accent }) => $accent.border};
  box-shadow: var(--shadow-lg);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: ${({ $accent }) => $accent.gradient};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ $accent }) => $accent.shadow};
`

export const Chip = styled.span`
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ $accent }) => $accent.text};
  padding: 5px 10px;
  border-radius: var(--radius-full);
  background: ${({ $accent }) => $accent.softStrong};
  border: 1px solid ${({ $accent }) => $accent.border};
`

export const Title = styled.h1`
  margin: 8px 0 0;
  font-size: 28px;
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text);
  letter-spacing: -0.02em;
`

export const Description = styled.p`
  margin: 0;
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.55;
`

export const MetaList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 4px;
`

export const Meta = styled.span`
  font-size: 13px;
  color: var(--color-text-muted);
  padding: 8px 12px;
  border-radius: var(--radius-full);
  background: var(--color-surface-muted);
  border: 1px solid var(--color-border);
`

export const MetaValue = styled.b`
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
`

export const BestResult = styled.div`
  font-size: 14px;
  color: var(--color-text-secondary);
  padding: 12px 16px;
  border-radius: var(--radius-md);
  background: ${({ $accent }) => $accent.soft};
  border: 1px solid ${({ $accent }) => $accent.border};

  strong {
    font-weight: var(--font-weight-bold);
    color: ${({ $accent }) => $accent.text};
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;

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