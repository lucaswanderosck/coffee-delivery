import styled from 'styled-components'

export const Container = styled.header``

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const LocationWithShoppingCartButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.span`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['purple-light']};
  color: ${({ theme }) => theme.colors['purple-dark']};
  font-size: ${({ theme }) => theme.text.sm};
  line-height: 1.3;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
`

export const CartButton = styled.button`
  width: 38px;
  height: 38px;
  border: 0;
  background: ${({ theme }) => theme.colors['yellow-light']};
  padding: 0.5rem;
  line-height: 0;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
`

export const CartCounter = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors['yellow-dark']};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.text.xs};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`
