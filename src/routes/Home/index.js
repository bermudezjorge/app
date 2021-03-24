import {Helmet} from 'react-helmet'

import Layout from 'components/Layout'
import ProductCard from 'views/ProductCard'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Inicio</title>
      </Helmet>

      <Layout type="product">
        {Array(21).fill("").map((_, i) => (
          <ProductCard
            showStore={true}
            resourceId={i+1}
            key={i}
          />
        ))}
      </Layout>
    </>
  )
}

export default Home