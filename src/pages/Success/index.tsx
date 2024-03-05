import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import successSvg from '../../assets/success.svg'
import { Icon } from '../../components/Hero/styles'
import { convertPaymentMethod } from '../../utils/formatters'
import { TypeAddressSchema } from '../Checkout/components/FormCheckout'
import { Container, Content, Info, OrderInfo } from './styles'

interface LocationStateType {
  state: TypeAddressSchema
}

export const Success: React.FC = () => {
  const { state } = useLocation() as LocationStateType
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  console.log(state)

  if (!state) {
    return null
  }

  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Content>
        <OrderInfo>
          <div>
            <Icon variant="purple">
              <MapPin color="#fff" weight="fill" size={16} />
            </Icon>
            <Info>
              <p>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <p>
                  {state.neighborhood} - {state.city}, {state.state}
                </p>
              </p>
            </Info>
          </div>
          <div>
            <Icon variant="yellow">
              <Timer color="#fff" weight="fill" size={16} />
            </Icon>
            <Info>
              <p>Previsão de Entrega</p>
              <strong>20min - 30min</strong>
            </Info>
          </div>
          <div>
            <Icon variant="yellow-dark">
              <CurrencyDollar color="#fff" size={16} />
            </Icon>
            <Info>
              <p>Pagamento na Entrega</p>
              <strong>{convertPaymentMethod(state.paymentMethod)}</strong>
            </Info>
          </div>
        </OrderInfo>
        <img src={successSvg} alt="" />
      </Content>
    </Container>
  )
}
