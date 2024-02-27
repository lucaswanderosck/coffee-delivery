import React from 'react'
import { useCart } from 'react-use-cart'
import { ButtonAmount } from '../ButtonAmount'
import { Container } from './styles'

export const SelectedCoffess: React.FC = () => {
  const { isEmpty, items, updateItemQuantity, removeItem } = useCart()

  if (isEmpty) return <p>Your cart is empty</p>
  return (
    <Container>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.formattedValue}</p>
              <p>{}</p>
              <ButtonAmount
                amount={item.quantity}
                decrement={() =>
                  updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
                }
                increment={() =>
                  updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                }
              />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
