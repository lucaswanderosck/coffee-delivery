import React from 'react'
import {
  ButtonConfirm,
  Container,
  DeliveryAddress,
  DeliveryAddressForm,
  DeliveryAddressTitle,
  FormCheckout,
  Order,
  Payment,
  PaymentButton,
  PaymentTitle,
  PaymentType,
  Resume,
  SelectedCoffees,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { useCart } from 'react-use-cart'
import { formatPrice } from '../../utils/formatters'
import { CardCoffee } from './components/CardCoffee'
import { InputText } from './components/InputText'

type locationProps = {
  city: string
  region_code: string
  postal: string
}

export const Checkout: React.FC = () => {
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart()

  const delivery = 3.5

  const [location, setLocation] = React.useState<locationProps>({
    city: '',
    region_code: '',
    postal: '',
  })

  React.useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => setLocation(data))
  }, [])

  return (
    <Container>
      <Order>
        <div>
          <h3>Complete seu pedido</h3>
          <FormCheckout
            id="order"
            onSubmit={() => console.log('Ordem enviada')}
          >
            <DeliveryAddress>
              <DeliveryAddressTitle>
                <MapPinLine size={22} color="#c47f17" />
                <div>
                  <h4>Endereço de Entrega</h4>
                  <p>Informe o endereço onde deseja receber seu pedido </p>
                </div>
              </DeliveryAddressTitle>

              <DeliveryAddressForm>
                <InputText
                  placeholder="CEP"
                  type="number"
                  containerProps={{ style: { gridArea: 'cep' } }}
                  defaultValue={location.postal}
                />

                <InputText
                  placeholder="Rua"
                  containerProps={{ style: { gridArea: 'street' } }}
                />

                <InputText
                  placeholder="Número"
                  type="number"
                  containerProps={{ style: { gridArea: 'number' } }}
                />

                <InputText
                  placeholder="Complemento"
                  optional
                  containerProps={{ style: { gridArea: 'fullAddress' } }}
                />

                <InputText
                  placeholder="Bairro"
                  containerProps={{ style: { gridArea: 'neighborhood' } }}
                />

                <InputText
                  placeholder="Cidade"
                  containerProps={{ style: { gridArea: 'city' } }}
                  defaultValue={location.city}
                />

                <InputText
                  placeholder="UF"
                  maxLength={2}
                  containerProps={{ style: { gridArea: 'state' } }}
                  defaultValue={location.region_code}
                />
              </DeliveryAddressForm>
            </DeliveryAddress>

            <Payment>
              <PaymentTitle>
                <CurrencyDollar size={22} color="#8047f8" />
                <div>
                  <h4>Pagamento</h4>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
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
            <ButtonConfirm type="submit" form="order">
              Confirmar Pedido
            </ButtonConfirm>
          </SelectedCoffees>
        </div>
      </Order>
    </Container>
  )
}
