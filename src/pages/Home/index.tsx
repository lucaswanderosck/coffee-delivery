import React from 'react'
import { Catalog } from '../../components/Catalog'
import { Hero } from '../../components/Hero'

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Catalog />
    </>
  )
}
