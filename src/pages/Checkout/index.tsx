import React from 'react'
import {
  ButtonConfirm,
  Container,
  Form,
  FormCheckout,
  Payment,
  PaymentButton,
  PaymentTitle,
  PaymentType,
  Resume,
  SelectedCoffees,
} from './styles'

import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { useCart } from 'react-use-cart'
import { formatPrice } from '../../utils/formatters'
import { CardCoffee } from './components/CardCoffee'

export const Checkout: React.FC = () => {
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart()

  const delivery = 3.5

  return (
    <Container>
      <Form>
        <div>
          <h3>Complete seu pedido</h3>
          <FormCheckout>
            <div></div>
            <Payment>
              <PaymentTitle>
                <h4>
                  <CurrencyDollar size={22} color="#8047f8" />
                  <span>Pagamento</span>
                </h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </PaymentTitle>
              <PaymentType>
                <PaymentButton value="credit">
                  <CreditCard size={16} color="#8047f8" />
                  <span>Cartão de Crédito</span>
                </PaymentButton>
                <PaymentButton value="debit">
                  <Bank size={16} color="#8047f8" />
                  <span>Cartão de Débito</span>
                </PaymentButton>
                <PaymentButton value="money">
                  <Money size={16} color="#8047f8" />
                  <span>Dinheiro</span>
                </PaymentButton>
              </PaymentType>
            </Payment>
          </FormCheckout>
        </div>
        <div>
          <h3>Cafés Selecionados</h3>
          <SelectedCoffees>
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
                <span>{formatPrice(delivery)}</span>
              </p>
              <strong>
                <span>Total</span>
                <span>{formatPrice(cartTotal + delivery)}</span>
              </strong>
            </Resume>
            <ButtonConfirm type="button">Confirmar Pedido</ButtonConfirm>
          </SelectedCoffees>
        </div>
      </Form>
    </Container>
  )
}
