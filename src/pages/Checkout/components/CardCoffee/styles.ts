import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 0.25rem;
  display: flex;

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    margin-right: 1.25rem;
  }

  > p {
    font-size: ${({ theme }) => theme.text.md};
    color: ${({ theme }) => theme.colors['base-text']};
    font-weight: bold;
  }

  > div {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
      font-size: ${({ theme }) => theme.text.md};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const ButtonRemove = styled.button`
  height: 2.375rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.button.m};
  padding: 0.5rem;
  line-height: 0;
  cursor: pointer;
  transition: all.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`

export const Separator = styled.div`
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  margin: 1.5rem 0;
`
