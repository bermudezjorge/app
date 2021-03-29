import NavLink from 'components/NavLink'

import styles from './style.module.css'

import home from 'assets/img/navbar/home.png'
import search from 'assets/img/navbar/search.png'
import profile from 'assets/img/navbar/profile.jpg'

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <NavLink to="/" img={home} />
      <NavLink to="/search" img={search} />
      <NavLink to="/me" img={profile} />
    </nav>
  )
}

export default NavBar