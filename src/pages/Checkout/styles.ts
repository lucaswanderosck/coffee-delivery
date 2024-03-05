import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  h3 {
    font-size: ${({ theme }) => theme.title.xs};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-family: 'Ballo 2', sans-serif;
    margin: 2.5rem 0 1rem;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`

export const Order = styled.div`
  display: grid;
  grid-template-columns: 640px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 0px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const SelectedCoffees = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;

  > strong {
    display: block;
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.text.lg};
    font-weight: bold;
    text-align: start;
    margin-bottom: 2rem;
  }
`

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > p,
  strong {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.text.sm};
    font-weight: 400;
  }

  > strong {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.text.lg};
    font-weight: bold;
  }
`
export const ButtonConfirm = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.button.g};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 0.5rem;
  margin-top: 1.5rem;
  transition: background-color 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
