import NavLink from 'components/NavLink'

import styles from './styles.module.css'

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <NavLink to="/" text="Home" />
      <NavLink to="/search" text="Search" />
      <NavLink to="/me" text="Me" />
    </nav>
  )
}

export default NavBar