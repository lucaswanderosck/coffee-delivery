import { Minus, Plus } from '@phosphor-icons/react'
import React from 'react'
import { Container } from './styles'

export const ButtonQuantity: React.FC = () => {
  return (
    <Container>
      <button type="button">
        <Minus size={14} />
      </button>
      <span>1</span>
      <button type="button">
        <Plus size={14} />
      </button>
    </Container>
  )
}
