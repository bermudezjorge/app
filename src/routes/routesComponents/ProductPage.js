import {useRoute} from 'wouter'

const ProductPage = () => {
  const params = useRoute("/producto/:id")[1]

  return (
    <h1>Producto #{params.id}</h1>
  )
}

export default ProductPage