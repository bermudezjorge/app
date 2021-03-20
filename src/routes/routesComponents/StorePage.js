import StoreLayout from 'components/StoreLayout'
import StoreHeader from 'views/StoreHeader'
import ProductContainer from 'components/ProductContainer'
import ProductCard from 'views/ProductCard'


const StorePage = () => (
  <StoreLayout>
    <StoreHeader />

    <ProductContainer>
      {Array(12).fill("").map((_, i) => (
        <ProductCard
          showStore={false}
          resourceId={i+1}
          key={i}
        />
      ))}
    </ProductContainer>
  </StoreLayout>
)

export default StorePage