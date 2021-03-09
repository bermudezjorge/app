import styles from './style.module.css'

const Promotion = () => {
  return (
    <li className={styles.container}>
      <img
        className={styles.picture}
        src="https://picsum.photos/200"
        alt="promocion"
      />
    </li>
  )
}

export default Promotion