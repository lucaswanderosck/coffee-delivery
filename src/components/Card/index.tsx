import { ShoppingCart } from '@phosphor-icons/react'
import React from 'react'
import { useCart } from 'react-use-cart'
import { ButtonAmount } from '../ButtonAmount'
import {
    AddCoffee,
    BuyActions,
    Container,
    DescriptionCoffee,
    ImageCoffee,
    Tag,
    TitleCoffee,
} from './styles'

interface Props {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export const Card: React.FC<Props> = ({ coffee }) => {
  const [amount, setAmount] = React.useState<number>(1)

  const { addItem, inCart } = useCart()

  const handleIncrementAmount = () => {
    setAmount((state) => state + 1)
  }

  const handleDecrementAmount = () => {
    if (amount > 1) {
      setAmount((state) => state - 1)
    }
  }

  const handleAddItemInCart = () => {
    addItem(coffee, amount)
    setAmount(1)
  }

  return (
    <Container>
      <ImageCoffee>
        <img src={`/coffees/${coffee.image}`} alt={coffee.title} />
      </ImageCoffee>
      <div>
        {coffee.tags.map((tag) => (
          <Tag key={tag} size="small">
            {tag}
          </Tag>
        ))}
      </div>
      <TitleCoffee>{coffee.title}</TitleCoffee>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>
      <BuyActions>
        <p>
          R$<strong>{coffee.price.toFixed(2)}</strong>
        </p>
        <div>
          <ButtonAmount
            amount={amount}
            increment={handleIncrementAmount}
            decrement={handleDecrementAmount}
          />
          <AddCoffee
            type="button"
            onClick={handleAddItemInCart}
            disabled={inCart(coffee.id)}
          >
            <ShoppingCart color="#fff" weight="fill" size={22} />
          </AddCoffee>
        </div>
      </BuyActions>
    </Container>
  )
}
