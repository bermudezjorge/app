import {useState} from 'react'

import Button from 'components/Button'

import styles from './style.module.css'

const BTN_NAMES = {
	option1: 'cerca',
	option2: 'barato'
}

const SearchBar = ({setSearch}) => {
	const [text, setText] = useState('')
	const [showMenu, setShowMenu] = useState(false)

	const handleOnChange = (e) => {
		if(e.target.value === '') {
			setText('')
			setShowMenu(false)
		} else {
			setText(e.target.value)
			setShowMenu(true)
		}
	}

	const handleClick = (e) => {
		e.preventDefault()
		setSearch(text)
		setShowMenu(false)
	}

	const clearSearch = (e) => {
		e.preventDefault()
		setText('')
		setShowMenu(false)
	}

	return (
		<form className={styles.container}>
			<div className={styles.searchBarContainer}>
				<input
					type="text"
					placeholder="Buscar producto por..."
					className={styles.searchBar}
					value={text}
					onChange={handleOnChange}
				/>
				{
					!!text && (
						<Button
							type="closeButton"
							text="&times;"
							onClick={clearSearch}
						/>
					)
				}
			</div>

			{showMenu && (
				<div className={styles.menu}>
					<button
						className={styles.menuBtn}
						onClick={handleClick}
					>
						{BTN_NAMES.option1}
					</button>
					<button
						className={styles.menuBtn}
						onClick={handleClick}
					>
						{BTN_NAMES.option2}
					</button>
				</div>
			)}
		</form>
	)
}

export default SearchBar