import Modal from 'react-modal'

import Button from 'components/Button'
import InputGroup from 'components/InputGroup'
import Input from 'components/Input'

import hideScrollByModal from 'utils/hideScrollByModal'

import styles from './style.module.css'

const ModalEditStoreInfo = ({show, setShow}) => {

	hideScrollByModal(show)

	return (
		<Modal
    	isOpen={show}
    	className={styles.modal}
			appElement={document.getElementById('modalStore')}
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
				<InputGroup message="Solo se puede cambiar el usuario 1 vez al mes.">
					<Input type="text" placeholder="usuario" />
				</InputGroup>

				<InputGroup message="Datos principales">
					<Input type="text" placeholder="dirección" />
					<Input type="date" />
					<Input type="number" placeholder="telefono" />
				</InputGroup>

				<InputGroup message="Descripción | datos importantes">
					<Input type="textarea" placeholder="Descripcion" />
				</InputGroup>
			</form>
    </Modal>
	)
}

export default ModalEditStoreInfo