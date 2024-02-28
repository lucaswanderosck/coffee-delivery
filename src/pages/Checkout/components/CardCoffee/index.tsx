import { Trash } from '@phosphor-icons/react'
import React from 'react'
import { ButtonAmount } from '../../../../components/ButtonAmount'
import { formatPrice } from '../../../../utils/formatters'
import { ButtonRemove, Container, Separator } from './styles'

interface Props {
  title: string
  image: string
  price: number
  remove: () => void
  increment: () => void
  decrement: () => void
  amount: number | undefined
}

export const CardCoffee: React.FC<Props> = ({
  title,
  image,
  price,
  increment,
  decrement,
  amount,
  remove,
}) => {
  return (
    <>
      <Container>
        <img src={image} alt={title} />
        <div>
          <p>{title}</p>
          <div>
            <ButtonAmount
              increment={increment}
              decrement={decrement}
              amount={amount}
            />
            <ButtonRemove type="button" onClick={remove}>
              <Trash size={16} color="#8047f8" />
              <span>Remover</span>
            </ButtonRemove>
          </div>
        </div>
        <p>{formatPrice(price)}</p>
      </Container>
      <Separator />
    </>
  )
}
