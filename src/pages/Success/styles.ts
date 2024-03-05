import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 85%;
  }

  > h1 {
    margin-top: 5rem;
    font-size: ${({ theme }) => theme.title.lg};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;

    @media (max-width: 768px) {
      margin-top: 2.5rem;
    }
  }

  > p {
    font-size: ${({ theme }) => theme.text.lg};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 2.5rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2.5rem;

    img {
      width: 85%;
      margin-bottom: 3rem;
    }
  }
`

export const OrderInfo = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.background};
  background-clip: padding-box;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Info = styled.div`
  color: ${({ theme }) => theme.colors['base-text']};
`
