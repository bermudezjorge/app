import ContentLink from 'components/ContentLink'

import styles from './style.module.css'

import profilePic from 'assets/img/profile.jpg'

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <ContentLink to="/" icon="🏡" />
      <ContentLink to="/search" icon="🔎" />
      <ContentLink to="/me" image={profilePic} />
    </nav>
  )
}

export default NavBar