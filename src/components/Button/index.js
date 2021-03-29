import styles from './style.module.css'

const Button = ({type, text, onClick}) => {
	let buttonStyle = ''

	if(type === 'closeButton') {
		buttonStyle = styles[type]
	} else {
		buttonStyle = styles.buttonDefaultStyle + ' ' + styles[type]
	}

	return (
		<button
			className={buttonStyle}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export default Button