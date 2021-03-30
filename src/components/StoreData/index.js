import Text from '../Text'

import styles from './style.module.css'

const StoreData = ({emoji, text}) => (
  <li className={styles.container}>
    <span className={styles.emoji}>
      {emoji}
    </span>
    <a
      href="https://www.google.com/maps/dir/10.4853365,-66.8995901/10.4853998,-66.8999978/@10.4821821,-66.891243,16z"
      target="_blank"
      rel="noreferrer"
    >
      <Text type="storeData">{text}</Text>
    </a>
  </li>
)

export default StoreData