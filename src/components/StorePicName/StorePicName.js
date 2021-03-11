import {connect} from 'react-redux'

import {getPic} from 'store/storereducer/selectors'

import styles from './style.module.css'

const StorePicName = ({pic}) => {
  return (
    <>
      <img className={styles.picture} src={pic} alt="tienda logo"/>
      <h1 className={styles.name}>Nombre Tienda</h1>
    </>
  )
}

const mapStateToProps = state => getPic(state)

export default connect(mapStateToProps)(StorePicName)