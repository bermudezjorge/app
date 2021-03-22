import Layout from 'components/Layout'
import StoreHeader from 'views/StoreHeader'
import ProductCard from 'views/ProductCard'


const StorePage = () => (
  <Layout type="store">
    <StoreHeader />

    <Layout type="product">
      {Array(12).fill("").map((_, i) => (
        <ProductCard
          showStore={false}
          resourceId={i+1}
          key={i}
        />
      ))}
    </Layout>
  </Layout>
)

export default StorePage