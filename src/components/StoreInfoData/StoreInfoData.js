import styles from './style.module.css'

const LI = ({emoji, text, link}) => (
  <li className={styles.container}>
    <span className={styles.emoji}>
      {emoji}
    </span>
    {link ? (
      <a
        className={styles.link}
        href="https://www.google.com/maps/dir/10.4853365,-66.8995901/10.4853998,-66.8999978/@10.4821821,-66.891243,16z"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className={styles.text}>{text}</h3>
      </a>
    ) : (
      <h3 className={styles.text}>{text}</h3>
    )}
  </li>
)

const StoreInfoData = ({type, text}) => {

  switch(type) {
    case "direction": {
      return (
        <LI
          emoji="🌎"
          text={text}
          link={true}
        />
      )
    }

    case "workinghours": {
      return (
        <LI
          emoji="⌚"
          text={text}
        />
      )
    }

    case "phone": {
      return (
        <LI
          emoji="📱"
          text={text}
        />
      )
    }

    default: {
      return (
        <LI text={text} />
      )
    }
  }
}

export default StoreInfoData