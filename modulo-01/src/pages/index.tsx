import { GetServerSideProps } from 'next'
import { Title } from '../styles/pages/Title'

interface Iproduct {
  id: number,
  title: string
}

interface IhomeProps {
  recommendedProducts: Iproduct[]
}

export default function Home({ recommendedProducts }: IhomeProps) {
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

export const getServerSideProps: GetServerSideProps<IhomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended')
  const recommendedProducts = await response.json()

  return {
    props: {
      recommendedProducts
    }
  }
}
