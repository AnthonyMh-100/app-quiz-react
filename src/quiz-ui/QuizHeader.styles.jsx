import { styled } from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: rgba(248, 250, 252, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`

export const HeaderInner = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);

  @media (max-width: 640px) {
    gap: 14px;
    align-items: flex-start;
    flex-direction: column;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Logo = styled.div`
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-primary);
`

export const BrandName = styled.span`
  font-size: 19px;
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text);
  letter-spacing: -0.02em;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media (max-width: 640px) {
    align-items: stretch;
    width: 100%;
  }
`

export const ScoreRow = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
`

export const ScoreText = styled.span`
  font-size: 13px;
  color: var(--color-text-secondary);
`

export const ScoreStrong = styled.strong`
  font-size: 16px;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
`

export const Percent = styled.span`
  font-size: 13px;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-600);
`

export const ProgressBar = styled.div`
  width: 180px;
  height: 8px;
  background: var(--color-border);
  border-radius: var(--radius-full);
  overflow: hidden;

  @media (max-width: 640px) {
    width: 100%;
  }
`

export const ProgressFill = styled.div`
  height: 100%;
  border-radius: var(--radius-full);
  background: var(--gradient-primary);
  transition: width 0.4s ease;
`