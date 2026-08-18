import { styled } from 'styled-components'

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 13px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const IconSlot = styled.span`
  position: absolute;
  left: 14px;
  display: inline-flex;
  align-items: center;
  color: var(--color-text-muted);
  pointer-events: none;
`

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '42px' : '16px')};
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  color: var(--color-text);
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    background-color 0.18s ease;

  &::placeholder {
    color: var(--color-text-disabled);
  }

  &:hover {
    border-color: var(--color-border-strong);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 4px var(--color-primary-50);
    background-color: var(--color-surface);
  }
`