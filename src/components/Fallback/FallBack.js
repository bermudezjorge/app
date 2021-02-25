import loadingImg from 'assets/img/fallback/Online_shopping_SVG.svg'
import notFoundImg from 'assets/img/fallback/Error_404_SVG.svg'
import errorPageImg from 'assets/img/fallback/Error_notification_SVG.svg'

import styles from './styles.module.css'

const IMG_TYPE = {
  loading: loadingImg,
  notFound: notFoundImg,
  error: errorPageImg
}

const H1 = ({children}) => (
  <h1 className={styles.text}>
    {children}
  </h1>
)

const FallBackText = ({type, page}) => {
  if(type === 'notFound')
    return <H1>No se ha encontrado la pagina "<b>{page}</b>", intente otra ruta.</H1>

  if(type === 'error')
    return <H1>Ha ocurrido un error, recargue la pagina.</H1>

  return <H1>Cargando...</H1>
}

const FallBack = ({type, page}) => (
  <div className={styles.container}>
    <img
      src={IMG_TYPE[type]}
      alt="cargando..."
      className={styles.img}
    />

    <FallBackText type={type} page={page} />
  </div>
)

export default FallBack