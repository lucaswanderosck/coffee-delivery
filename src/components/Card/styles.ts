import styled from 'styled-components'

export const Container = styled.li`
  width: 256px;
  height: 310px;
  padding: 0 0.75rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageCoffee = styled.div`
  width: 120px;
  height: 120px;
  margin-top: -1.25rem;
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
  margin-bottom: 0.75rem;

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
  }
`

export const AddCoffee = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: 0;
  background: ${({ theme }) => theme.colors['purple-dark']};
  padding: 0.5rem;
  line-height: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.purple};
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

  & + & {
    margin-left: 0.25rem;
  }
`
