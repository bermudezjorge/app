// import {useRoute} from 'wouter'

import StoreLayout from 'components/StoreLayout'
import StoreHeader from 'views/StoreHeader'
import StorePromotions from 'views/StorePromotions'
import ProductContainer from 'components/ProductContainer'
import ProductCard from 'views/ProductCard'


const StorePage = () => {
  // const params = useRoute("/tienda/:name")[1]

  return (
    <StoreLayout>
      <StoreHeader />
      <StorePromotions />

      <ProductContainer showingIn="store">
        {Array(12).fill("").map((_, i) => (
          <ProductCard
            productId={i+1}
            key={i}
          />
        ))}
      </ProductContainer>
    </StoreLayout>
  )
}

export default StorePage