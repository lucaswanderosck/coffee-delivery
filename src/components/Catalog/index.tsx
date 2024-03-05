import React from 'react'
import { coffees } from '../../../data.json'
import { Card } from '../Card'
import { Tag } from '../Card/styles'
import { Container, Filter, HeadLine, List } from './styles'

export const Catalog: React.FC = () => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])

  const handleFilterClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const filteredCoffees = React.useMemo(() => {
    if (selectedTags.length === 0) {
      return coffees
    }

    return coffees.filter((coffee) =>
      selectedTags.every((tag) => coffee.tags.includes(tag)),
    )
  }, [selectedTags])

  return (
    <Container>
      <HeadLine>
        <h2>Nossos Cafés</h2>
        <Filter>
          <Tag
            size="big"
            selected={selectedTags.includes('tradicional')}
            onClick={() => handleFilterClick('tradicional')}
          >
            Tradicional
          </Tag>
          <Tag
            size="big"
            selected={selectedTags.includes('especial')}
            onClick={() => handleFilterClick('especial')}
          >
            Especial
          </Tag>
          <Tag
            size="big"
            selected={selectedTags.includes('com leite')}
            onClick={() => handleFilterClick('com leite')}
          >
            Com leite
          </Tag>
          <Tag
            size="big"
            selected={selectedTags.includes('alcoólico')}
            onClick={() => handleFilterClick('alcoólico')}
          >
            Alcólico
          </Tag>
          <Tag
            size="big"
            selected={selectedTags.includes('gelado')}
            onClick={() => handleFilterClick('gelado')}
          >
            Gelado
          </Tag>
        </Filter>
      </HeadLine>
      {filteredCoffees.length === 0 && <p>Nenhum Café Encontrado</p>}
      <List>
        {filteredCoffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </List>
    </Container>
  )
}
