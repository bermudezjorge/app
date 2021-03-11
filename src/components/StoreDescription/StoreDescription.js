import styles from './style.module.css'

const StoreDescription = ({text}) => (
  <p className={styles.description}>
    {text}
  </p>
)

export default StoreDescription