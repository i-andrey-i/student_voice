import React, { useState, useEffect } from 'react'
import GraphOfCreate from '../../shared/SpecialPages/GraphOfCreate/GraphOfCreate'
import styles from './AddNewSmth.module.css'
import plus from '../../shared/images/Plus.svg'
import minus from '../../shared/images/Minus.svg'

const AddNewSmth = ({
	onAdd,
	current,
	listForAdd,
	name,
	setName,
	fullName,
	setFullName,
	address,
	setAddress,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleSubmit = e => {
		console.log('ttv')
		e.preventDefault()
		const newInstitute = [name, fullName, address, 0, 0]
		onAdd(newInstitute, current)
		setName('')
		setFullName('')
		setAddress('')
		setIsOpen(false)
	}

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div className={styles.formContainer}>
			<p onClick={toggleMenu} className={styles.Sorting}>
				{listForAdd[current].title}
				<img
					src={isOpen ? minus : plus}
					alt={isOpen ? 'Minus icon' : 'Plus icon'}
					className={styles.Icon}
				/>
			</p>

			{isOpen && (
				<form onSubmit={handleSubmit} className={styles.DropdownMenu}>
					{listForAdd[current].fields.map((field, index) => (
						<GraphOfCreate
							key={index}
							className={styles.DropdownItem}
							label={field.label}
							value={field.state}
							onChange={e => field.setState(e.target.value)}
							required
						/>
					))}
					<button className={styles.ButT} type='submit'>
						Добавить
					</button>
				</form>
			)}
		</div>
	)
}

export default AddNewSmth
