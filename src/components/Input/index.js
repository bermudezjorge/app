import styles from './style.module.css'

const Input = ({type, value, placeholder, onChange}) => {

  if(type === 'textarea') {
    return (
      <textarea
        className={styles.input}
        value={value}
        placeholder="descripción"
      >
      </textarea>
    )
  }

  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}


export default Input