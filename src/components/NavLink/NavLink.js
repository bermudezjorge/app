import {Link, useRoute} from 'wouter'

import styles from './styles.module.css'

const NavLink = ({to, text}) => {
  const [match] = useRoute(to)

  const isActive = () => match ? styles.active : ''

  return (
    <Link to={to} className={`${styles.link} ${isActive()}`}>
      {text}
    </Link>
  )
}

export default NavLink