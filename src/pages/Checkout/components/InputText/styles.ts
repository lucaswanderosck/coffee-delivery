import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Content = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.colors['base-button']};
  }

  input {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.text.xs};
    width: 100%;
    height: 42px;
    background-color: transparent;
    border: none;
    padding: 0.75rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }

    &[type='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  span {
    color: ${({ theme }) => theme.colors['base-label']};
    padding-right: 0.75rem;
    font-size: ${({ theme }) => theme.text.xs};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.text.xs};
  color: ${({ theme }) => theme.colors.danger};
`
