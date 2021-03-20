import ProductContainer from 'components/ProductContainer'
import ProductCard from 'views/ProductCard'

const Home = () => {
  return (
    <ProductContainer>
      {Array(20).fill("").map((_, i) => (
        <ProductCard
          showStore={true}
          resourceId={i+1}
          key={i}
        />
      ))}
    </ProductContainer>
  )
}

export default Home