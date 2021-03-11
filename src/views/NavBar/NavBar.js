import NavLink from 'components/NavLink'

import styles from './style.module.css'

import profilePic from 'assets/img/profile.jpg'

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <NavLink to="/" icon="🏡" />
      <NavLink to="/search" icon="🔎" />
      <NavLink to="/me" profilePic={profilePic} />
    </nav>
  )
}

export default NavBar