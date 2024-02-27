import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
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

  const { totalUniqueItems } = useCart()

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <LocationWithShoppingCartButton>
          <Location>
            <MapPin weight="fill" color="#8047f8" size={22} />
            <p>
              {location.city} - {location.region_code}
            </p>
          </Location>
          <CartButton type="button">
            <Link to="/checkout">
              <ShoppingCartSimple weight="fill" color="#c47f17" size={22} />
              {totalUniqueItems > 0 && (
                <CartCounter>
                  <span>{totalUniqueItems}</span>
                </CartCounter>
              )}
            </Link>
          </CartButton>
        </LocationWithShoppingCartButton>
      </Content>
    </Container>
  )
}
