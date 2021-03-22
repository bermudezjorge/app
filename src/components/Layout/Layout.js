import styles from './style.module.css'

const Layout = ({type, children}) => (
  <div className={styles[type]}>
    {children}
  </div>
)

export default Layout