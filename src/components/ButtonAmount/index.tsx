import { Minus, Plus } from '@phosphor-icons/react'
import React from 'react'
import { Container } from './styles'

interface Props {
  increment: () => void
  decrement: () => void
  amount: number | undefined
}

export const ButtonAmount: React.FC<Props> = ({
  amount,
  decrement,
  increment,
}) => {
  return (
    <Container>
      <button type="button" onClick={decrement}>
        <Minus size={14} />
      </button>
      <span>{amount}</span>
      <button type="button" onClick={increment}>
        <Plus size={14} />
      </button>
    </Container>
  )
}
