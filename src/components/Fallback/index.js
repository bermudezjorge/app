import Text from '../Text'

import loadingImg from 'assets/img/fallback/Online_shopping_SVG.svg'
import notFoundImg from 'assets/img/fallback/Error_404_SVG.svg'
import errorPageImg from 'assets/img/fallback/Error_notification_SVG.svg'
import searchImg from 'assets/img/fallback/Search_SVG.svg'

import styles from './style.module.css'

const IMG_TYPE = {
  loading: loadingImg,
  notFound: notFoundImg,
  error: errorPageImg,
  noResult: searchImg
}

const FallBackText = ({type, page}) => {
  if(type === 'notFound')
    return <Text type="fallback">No se ha encontrado la pagina "<b>{page}</b>", intente otra pagina.</Text>

  if(type === 'error')
    return <Text type="fallback">Ha ocurrido un error, recargue la pagina.</Text>

  if(type === 'loading')
    return <Text type="fallback">Cargando...</Text>

  return <Text type="fallback">Sin resultado</Text>
}

const FallBack = ({type, page}) => (
  <div
    className={styles.container}
    style={type === 'noResult' ? {height: 'auto'} : {}}
  >
    <img
      src={IMG_TYPE[type]}
      alt="cargando"
      className={styles.img}
    />

    <FallBackText type={type} page={page} />
  </div>
)

export default FallBack