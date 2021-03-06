import ProductContainer from 'components/ProductContainer'
import ProductCard from 'views/ProductCard'

const Home = () => {
  return (
    <ProductContainer showingIn="home">
      {Array(20).fill("").map((_, i) => (
        <ProductCard
          productId={i+1}
          key={i}
        />
      ))}
    </ProductContainer>
  )
}

export default Home