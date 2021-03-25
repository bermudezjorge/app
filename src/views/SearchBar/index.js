import {useState} from 'react'

import styles from './style.module.css'

const SearchBar = ({onChange}) => {
	const [show, setShow] = useState(false)

	const handleOnChange = ({target}) => {
		onChange(target.value)

		if(target.value === '') {
			setShow(false)
		} else {
			setShow(true)
		}
	}

	return (
		<form className={styles.container}>
			<input
				type="text"
				placeholder="Buscar producto por..."
				className={styles.searchBar}
				onChange={handleOnChange}
			/>
			{show && (
				<div className={styles.menu}>
					<button className={styles.menuBtn}>cercania</button>
					<button className={styles.menuBtn}>economico</button>
				</div>
			)}
		</form>
	)
}

export default SearchBar