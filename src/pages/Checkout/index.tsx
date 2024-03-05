import React from 'react'
import {
  ButtonConfirm,
  Container,
  Order,
  Resume,
  SelectedCoffees,
} from './styles'

import { useCart } from 'react-use-cart'
import { formatPrice } from '../../utils/formatters'
import { CardCoffee } from './components/CardCoffee'
import { FormCheckout } from './components/FormCheckout'

export const Checkout: React.FC = () => {
  const { items, updateItemQuantity, removeItem, cartTotal, isEmpty } =
    useCart()

  const deliveryPrice = 3.5

  const isDisabled = isEmpty

  return (
    <Container>
      <Order>
        <div>
          <h3>Complete seu pedido</h3>
          <FormCheckout id="order" />
        </div>
        <div>
          <h3>Cafés Selecionados</h3>
          <SelectedCoffees>
            {isEmpty && <strong>Não há itens no carrinho</strong>}
            {items.map((coffee) => (
              <CardCoffee
                key={coffee.id}
                image={coffee.image}
                title={coffee.title}
                price={coffee.price * (coffee.quantity ?? 1)}
                remove={() => removeItem(coffee.id)}
                increment={() =>
                  updateItemQuantity(coffee.id, (coffee.quantity ?? 0) + 1)
                }
                decrement={() =>
                  updateItemQuantity(coffee.id, (coffee.quantity ?? 0) - 1)
                }
                amount={coffee.quantity}
              />
            ))}
            <Resume>
              <p>
                <span>Total de itens</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </p>
              <p>
                <span>Entrega</span>
                <span>{formatPrice(deliveryPrice)}</span>
              </p>
              <strong>
                <span>Total</span>
                <span>{formatPrice(cartTotal + deliveryPrice)}</span>
              </strong>
            </Resume>

            <ButtonConfirm type="submit" form="order" disabled={isDisabled}>
              Confirmar Pedido
            </ButtonConfirm>
          </SelectedCoffees>
        </div>
      </Order>
    </Container>
  )
}
