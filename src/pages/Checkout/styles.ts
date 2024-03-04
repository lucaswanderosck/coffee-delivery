import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto 200px;

  h3 {
    font-size: ${({ theme }) => theme.title.xs};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-family: 'Ballo 2', sans-serif;
    margin: 2.5rem 0 1rem;
  }
`

export const Order = styled.div`
  display: grid;
  grid-template-columns: 640px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 0px;
`

export const FormCheckout = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 372px 207px;
  grid-column-gap: 0px;
  grid-row-gap: 0.75rem;

  > div {
    background: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px;
    padding: 2.5rem;
  }
`

export const SelectedCoffees = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PaymentTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  h4 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.text.md};
    font-weight: 400;
    margin-bottom: 0.125rem;
  }

  p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.text.sm};
  }
`

export const PaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

interface PaymentButtonProps {
  variant?: 'credit' | 'debit' | 'money'
}

export const PaymentButton = styled(RadioGroup.Item)<PaymentButtonProps>`
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.button.m};
  text-transform: uppercase;
  transition: all 0.2s;

  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  &[data-state='checked'] {
    background: ${({ theme }) => theme.colors['purple-light']};
    border: 1px solid ${({ theme }) => theme.colors.purple};
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
export const DeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DeliveryAddressTitle = styled(PaymentTitle)``

export const DeliveryAddressForm = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 1rem 0.75rem;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
`
