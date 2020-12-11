import { useState, useEffect } from 'react'
import { Title } from '../styles/pages/Title'


interface Iproduct {
  id: number,
  title: string
}

export default function Home() {

  const [recommendedProducts, setRecommendedProducts] = useState<Iproduct[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data)
      })
    })
  }, [])

  return (
    <section>

    <Title>Products</Title>

    {recommendedProducts.map(recommendedProduct => {
      return (
        <li key={recommendedProduct.id}>
          {recommendedProduct.title}
        </li>
      )
    })}
    </section>
  )
}
