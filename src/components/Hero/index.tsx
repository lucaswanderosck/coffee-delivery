import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import React from 'react'
import hero from '../../assets/hero.svg'
import { Container, Content, Icon, Title, TitleItems } from './styles'

export const Hero: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <TitleItems>
            <li>
              <Icon variant="yellow-dark">
                <ShoppingCart size={16} weight="fill" color="#fff" />
              </Icon>
              <p>Compra Simples e segura</p>
            </li>
            <li>
              <Icon variant="base-text">
                <Package size={16} weight="fill" color="#fff" />
              </Icon>
              <p>Embalagem mantém o café intacto</p>
            </li>
            <li>
              <Icon variant="yellow">
                <Timer size={16} weight="fill" color="#fff" />
              </Icon>
              <p>Entrega rápida e rastreada</p>
            </li>
            <li>
              <Icon variant="purple">
                <Coffee size={16} weight="fill" color="#fff" />
              </Icon>
              <p>O café chega fresquinho até você</p>
            </li>
          </TitleItems>
        </div>
        <img src={hero} alt="" />
      </Content>
    </Container>
  )
}
