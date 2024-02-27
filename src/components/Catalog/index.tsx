import { ShoppingCartSimple } from '@phosphor-icons/react'
import React from 'react'
import coffee from '../../assets/coffees/arabe.svg'
import { ButtonQuantity } from '../ButtonQuantity'
import {
  BuyActions,
  Card,
  Container,
  DescriptionCoffee,
  Filter,
  HeadLine,
  ImageCoffee,
  List,
  Tag,
  TitleCoffee,
} from './styles'

export const Catalog: React.FC = () => {
  return (
    <Container>
      <HeadLine>
        <h2>Nossos Cafés</h2>
        <Filter>
          <Tag size="big">Tradicional</Tag>
          <Tag size="big">Especial</Tag>
          <Tag size="big">Com leite</Tag>
          <Tag size="big">Alcólico</Tag>
          <Tag size="big">Gelado</Tag>
        </Filter>
      </HeadLine>
      <List>
        <Card>
          <ImageCoffee>
            <img src={coffee} alt="" />
          </ImageCoffee>
          <Tag size="small">Tradicional</Tag>
          <TitleCoffee>Café Arabe</TitleCoffee>
          <DescriptionCoffee>
            O tradicional café feito com água quente e grãos moídos
          </DescriptionCoffee>
          <BuyActions>
            <p>
              R$<strong>9,90</strong>
            </p>
            <div>
              <ButtonQuantity />
              <button type="button">
                <ShoppingCartSimple color="#fff" weight="fill" size={22} />
              </button>
            </div>
          </BuyActions>
        </Card>
      </List>
    </Container>
  )
}
