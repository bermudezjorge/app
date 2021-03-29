import Modal from 'react-modal'

import Button from 'components/Button'

import styles from './style.module.css'

const Input = ({type, placeholder}) => (
	<input
		className={styles.input}
		type={type}
		placeholder={placeholder}
	/>
)

const Group = ({message, children}) => (
	<div className={styles.group}>
		<h3 className={styles.groupMessage}>{message}</h3>
		{children}
	</div>
)

const BODY = document.body

const ModalEditStoreInfo = ({show, setShow}) => {

	show ? BODY.style.overflowY = 'hidden' : BODY.style.overflowY = 'scroll'

	return (
		<Modal
    	isOpen={show}
    	className={styles.modal}
			style={{background: '#000'}}
    >
	  	<Button
	  		onClick={() => setShow(false)}
				type="closeButton"
				text="&times;"
	  	/>
	  	
	  	<h1 className={styles.modalTitle}>
	  		Editar información de tienda
	  	</h1>

			<form className={styles.form}>
				<Group message="Solo se puede cambiar el usuario 1 vez al mes.">
					<Input type="text" placeholder="usuario" />
				</Group>

				<Group message="Datos principales">
					<Input type="text" placeholder="dirección" />
					<Input type="date" />
					<Input type="number" placeholder="telefono" />
				</Group>

				<Group message="Descripción | datos importantes">
					<textarea
						className={styles.input}
						placeholder="descripción"
					>
					</textarea>
				</Group>
			</form>
    </Modal>
	)
}

export default ModalEditStoreInfo