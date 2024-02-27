import styled from 'styled-components'
import bg from '../../assets/hero-bg.svg'

export const Container = styled.div`
  background: url(${bg}) no-repeat center;
  background-size: cover;
  height: 544px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 588px 1fr;

  > img {
    margin-left: auto;
  }
`
export const Title = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.title.xl};
    line-height: 1.3;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.text.lg};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    line-height: 1.3;
  }
`

export const TitleItems = styled.ul`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 1.25rem;

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.text.md};

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

interface IconProps {
  variant: 'yellow' | 'purple' | 'base-text' | 'yellow-dark'
}

export const Icon = styled.span<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant }) => theme.colors[variant]};
`
