import styled from 'styled-components'

export const BackLink = ({ onClick, children }) => (
  <Bar>
    <LinkButton onClick={onClick}>{children}</LinkButton>
  </Bar>
)

const Bar = styled.div`
  position: fixed;
  top: 18px;
  left: 20px;
  z-index: 50;
`

const LinkButton = styled.button`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  padding: 8px 14px;
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    color 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    color: var(--color-primary-600);
    box-shadow: var(--shadow-md);
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