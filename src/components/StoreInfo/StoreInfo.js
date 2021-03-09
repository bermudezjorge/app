import styles from './style.module.css'

const StoreInfo = () => {
  return (
    <>
      <ul className={styles.infoData}>
        <li>
          <a href="googlemaps.com">Ciudad Bolívar, Sector Vista Hermosa</a>
        </li>
        <li>8:00 am - 4:00 pm</li>
        <li>0412-4152478</li>
      </ul>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Saepe cumque sapiente et exercitationem
        aspernatur quo sunt aut nesciunt iusto consequuntur
      </p>
    </>
  )
}

export default StoreInfo