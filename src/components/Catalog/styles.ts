import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`
export const List = styled.ul`
  margin: 3.375rem 0 10rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 40px;
`

export const Card = styled.li`
  width: 256px;
  height: 310px;
  padding: 0 12px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;
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
`

export const Filter = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ImageCoffee = styled.div`
  width: 120px;
  height: 120px;
  margin-top: -20px;
  margin-bottom: 0.75rem;

  img {
    width: 100%;
    height: 100%;
  }
`

export const TitleCoffee = styled.h2`
  font-size: ${({ theme }) => theme.title.sm};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-family: 'Baloo 2', sans-serif;
  margin: 0.875rem 0 0.25rem;
`

export const DescriptionCoffee = styled.p`
  font-size: ${({ theme }) => theme.text.sm};
  color: ${({ theme }) => theme.colors['base-label']};
  text-align: center;
`

export const BuyActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 12px;

  > p {
    color: ${({ theme }) => theme.colors['base-text']};

    strong {
      font-size: ${({ theme }) => theme.title.md};
      font-family: 'Baloo 2', sans-serif;
      margin-left: 0.25rem;
    }
  }

  > div {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > button {
      width: 38px;
      height: 38px;
      border: 0;
      background: ${({ theme }) => theme.colors['purple-dark']};
      padding: 0.5rem;
      line-height: 0;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: ${({ theme }) => theme.colors.purple};
      }
    }
  }
`

interface TagProps {
  size: 'small' | 'big'
}

export const Tag = styled.span<TagProps>`
  display: inline-block;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.button.tag};
  font-weight: bold;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors['yellow-dark']};
  background: ${({ theme, size }) =>
    size === 'small' && theme.colors['yellow-light']};
  border: 2px solid
    ${({ theme, size }) =>
      size === 'small' ? 'transparent' : theme.colors.yellow};
  padding: ${({ size }) => (size === 'small' ? '4px 8px' : '6px 12px')};
  cursor: ${({ size }) => size === 'big' && 'pointer'};
`