import React from 'react'
import { coffees } from '../../../data.json'
import { Card } from '../Card'
import { Tag } from '../Card/styles'
import { Container, Filter, HeadLine, List } from './styles'

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
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </List>
    </Container>
  )
}
