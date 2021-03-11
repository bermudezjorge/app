import {Link, useRoute} from 'wouter'

import styles from './style.module.css'

const NavLink = ({to, icon, profilePic}) => {
  const [match] = useRoute(to)

  const isActive = () => match ? styles.active : ''

  return (
    <Link to={to}>
      {icon ? (
        <span
          className={`${styles.link} ${styles.icon} ${isActive()}`}
        >
          {icon}
        </span>
      ) : (
        <div className={`${styles.link} ${isActive()}`}>
          <img className={styles.img} src={profilePic} alt="profile" /> 
        </div>
      )}
    </Link>
  )
}

export default NavLink