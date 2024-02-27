import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import React from 'react'
import logo from '../../assets/logo.svg'
import {
  CartButton,
  CartCounter,
  Container,
  Content,
  Location,
  LocationWithShoppingCartButton,
} from './styles'

interface locationProps {
  city: string
  region_code: string
}

export const Header: React.FC = () => {
  const [location, setLocation] = React.useState<locationProps>({
    city: '',
    region_code: '',
  })

  React.useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => setLocation(data))
  }, [])

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <LocationWithShoppingCartButton>
          <Location>
            <MapPin weight="fill" color="#8047f8" size={22} />
            <p>
              {location.city} - {location.region_code}
            </p>
          </Location>
          <CartButton type="button">
            <ShoppingCart weight="fill" color="#c47f17" size={22} />
            <CartCounter>
              <span>3</span>
            </CartCounter>
          </CartButton>
        </LocationWithShoppingCartButton>
      </Content>
    </Container>
  )
}
