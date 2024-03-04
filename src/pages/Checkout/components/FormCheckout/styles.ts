import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 207px;
  grid-column-gap: 0px;
  grid-row-gap: 0.75rem;

  > div {
    background: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px;
    padding: 2.5rem;
  }
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
