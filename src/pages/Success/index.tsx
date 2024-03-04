import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import React from 'react'
import successSvg from '../../assets/success.svg'
import { Icon } from '../../components/Hero/styles'
import { Container, Content, Info, OrderInfo } from './styles'

export const Success: React.FC = () => {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Content>
        <OrderInfo>
          <div>
            <Icon variant="purple">
              <MapPin color="#fff" weight="fill" />
            </Icon>
            <Info>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <p>Farrapos - Porto Alegre, RS</p>
              </p>
            </Info>
          </div>
          <div>
            <Icon variant="yellow">
              <Timer color="#fff" weight="fill" />
            </Icon>
            <Info>
              <p>Previsão de Entrega</p>
              <strong>20min - 30min</strong>
            </Info>
          </div>
          <div>
            <Icon variant="yellow-dark">
              <CurrencyDollar color="#fff" />
            </Icon>
            <Info>
              <p>Pagamento na Entrega</p>
              <strong>Cartão de Crédito</strong>
            </Info>
          </div>
        </OrderInfo>
        <img src={successSvg} alt="" />
      </Content>
    </Container>
  )
}
