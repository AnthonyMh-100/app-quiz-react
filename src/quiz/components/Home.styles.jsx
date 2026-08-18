import { NavLink } from 'react-router'
import { styled } from 'styled-components'

export const Main = styled.main`
  min-height: 70vh;
  width: 100%;
  padding: 36px 24px 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:
    radial-gradient(circle at top, #eef2ff 0%, #f8fafc 40%),
    linear-gradient(to bottom, #f8fafc, #ffffff);
`

export const Hero = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-bottom: 28px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`

export const HeroCopy = styled.div``

export const Eyebrow = styled.span`
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-primary-600);
`

export const Title = styled.h1`
  font-size: clamp(1.75rem, 2.2vw, 2.25rem);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text);
  margin: 8px 0 0;
  letter-spacing: -0.02em;
`

export const Subtitle = styled.p`
  margin: 10px 0 0;
  max-width: 62ch;
  color: var(--color-text-secondary);
  line-height: 1.5;
  font-size: 0.98rem;
`

export const Logout = styled.button`
  flex-shrink: 0;
  padding: 9px 16px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-muted);
  font-size: 13px;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.16s ease,
    color 0.16s ease,
    border-color 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    color: var(--color-danger-text);
    border-color: var(--color-danger-border);
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

export const Section = styled.section`
  width: 100%;
  max-width: 1100px;
  margin-bottom: 32px;
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  flex-wrap: wrap;
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 19px;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  letter-spacing: -0.01em;
`

export const Filters = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const FilterChip = styled.button`
  padding: 7px 14px;
  border-radius: var(--radius-full);
  border: 1px solid ${({ $active }) => ($active ? 'transparent' : 'var(--color-border)')};
  background: ${({ $active }) => ($active ? 'var(--gradient-primary)' : 'var(--color-surface)')};
  color: ${({ $active }) => ($active ? '#ffffff' : 'var(--color-text-secondary)')};
  font-size: 13px;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  box-shadow: ${({ $active }) => ($active ? 'var(--shadow-primary)' : 'var(--shadow-sm)')};
  transition:
    transform 0.16s ease,
    background-color 0.16s ease,
    color 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ $active }) => ($active ? 'transparent' : 'var(--color-primary-200)')};
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

export const ContinueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`

export const ContinueCard = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, ${({ $accent }) => $accent.soft} 0%, ${({ $accent }) => $accent.softStrong} 100%);
  border: 1px solid ${({ $accent }) => $accent.border};
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 32px ${({ $accent }) => $accent.glow};
  }

  &:focus-visible {
    outline: 3px solid ${({ $accent }) => $accent.border};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`

export const ContinueIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: ${({ $accent }) => $accent.gradient};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ $accent }) => $accent.shadow};
  flex-shrink: 0;
`

export const ContinueBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const ContinueName = styled.span`
  font-size: 15px;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
`

export const ContinueMeta = styled.span`
  font-size: 13px;
  color: var(--color-text-muted);
`

export const ContinueArrow = styled.span`
  font-size: 13px;
  font-weight: var(--font-weight-semibold);
  color: ${({ $accent }) => $accent.text};
  white-space: nowrap;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
`

export const Card = styled(NavLink)`
  position: relative;
  padding: 22px 22px 18px;
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 216px;
  background: linear-gradient(135deg, ${({ $accent }) => $accent.soft} 0%, ${({ $accent }) => $accent.softStrong} 100%);
  border: 1px solid ${({ $accent }) => $accent.border};

  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  box-shadow: var(--shadow-sm);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: radial-gradient(
      circle at 20% 10%,
      ${({ $accent }) => $accent.glow},
      transparent 55%
    );
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 44px ${({ $accent }) => $accent.glow};
  }

  &:hover::before {
    opacity: 1;
  }

  &:focus-visible {
    outline: 3px solid ${({ $accent }) => $accent.border};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before {
      transition: none;
    }

    &:hover {
      transform: none;
    }
  }
`

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: ${({ $accent }) => $accent.gradient};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ $accent }) => $accent.shadow};
  transition: transform 0.2s ease;

  ${Card}:hover & {
    transform: translateY(-1px) scale(1.04);
  }
`

export const Chip = styled.span`
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ $accent }) => $accent.text};
  padding: 5px 10px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid ${({ $accent }) => $accent.border};
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Label = styled.h3`
  font-size: 1.15rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  text-align: left;
  margin: 0;
  letter-spacing: -0.01em;
`

export const Description = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.45;
  text-align: left;
  margin: 0;
`

export const MetaRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const Meta = styled.span`
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  padding: 5px 10px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--color-border);
`

export const BottomRow = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`

export const Stats = styled.div``

export const StatBase = styled.span`
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  padding: 6px 10px;
  border-radius: var(--radius-full);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  line-height: 1;
`

export const StatResult = styled(StatBase)`
  background: ${({ $accent }) => $accent.softStrong};
  color: ${({ $accent }) => $accent.text};
  border: 1px solid ${({ $accent }) => $accent.border};

  strong {
    font-weight: var(--font-weight-bold);
  }
`

export const StatNew = styled(StatBase)`
  background: var(--color-primary-50);
  color: var(--color-primary-800);
  border: 1px solid var(--color-primary-100);
`

export const Arrow = styled.span`
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  color: ${({ $accent }) => $accent.text};

  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 8px 12px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid ${({ $accent }) => $accent.border};

  opacity: 0.92;
  transform: translateY(2px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
    background: rgba(255, 255, 255, 0.85);
  }
`