import {useRoute} from 'wouter'

import StoreLayout from 'components/StoreLayout'

const StorePage = () => {
  const params = useRoute("/tienda/:name")[1]

  console.log(params)

  return (
    <StoreLayout />
  )
}

export default StorePage