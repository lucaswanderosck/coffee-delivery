import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 65%;
  }

  > p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.text.md};
    font-weight: bold;
    margin-top: 2rem;
  }
`
export const List = styled.ul`
  margin-top: 3.375rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const HeadLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.title.lg};
    font-family: 'Baloo 2', sans-serif;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 4rem;
  }
`

export const Filter = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`
