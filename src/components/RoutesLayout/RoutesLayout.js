import styles from './style.module.css'

const RoutesLayout = ({children}) => (
  <div className={styles.layout}>
    {children}
  </div>
)

export default RoutesLayout