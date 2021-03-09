import styles from './style.module.css'

const StorePicName = ({storePic, storeName}) => {
  return (
    <>
      <img className={styles.picture} src={storePic} alt="tienda logo"/>
      <h1 className={styles.name}>{storeName}</h1>
    </>
  )
}

export default StorePicName