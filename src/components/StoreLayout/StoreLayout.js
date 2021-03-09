import styles from './style.module.css'

const StoreLayout = ({children}) => (
  <div className={styles.layout}>
    {children}
  </div>
)

export default StoreLayout