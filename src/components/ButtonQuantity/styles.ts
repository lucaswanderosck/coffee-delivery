import styled from 'styled-components'

export const Container = styled.div`
  width: 72px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  > span {
    font-size: ${({ theme }) => theme.text.md};
    color: ${({ theme }) => theme.colors['base-title']};
  }

  > button {
    background: transparent;
    border: 0;
    line-height: 0;
    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme.colors.purple};
      transition: all 0.1s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors['purple-dark']};
      }
    }
  }
`
