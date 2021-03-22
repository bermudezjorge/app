import Layout from 'components/Layout'
import ProductCard from 'views/ProductCard'

const Home = () => {
  return (
    <Layout type="product">
      {Array(20).fill("").map((_, i) => (
        <ProductCard
          showStore={true}
          resourceId={i+1}
          key={i}
        />
      ))}
    </Layout>
  )
}

export default Home