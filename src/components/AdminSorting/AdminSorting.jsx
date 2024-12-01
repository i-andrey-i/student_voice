import { useState } from 'react'
import styles from './AdminSorting.module.css'
import plus from '../../shared/images/Plus.svg'
import minus from '../../shared/images/Minus.svg'

function AdminSorting(props) {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedSort, setSelectedSort] = useState(null) // Состояние для выбранного метода сортировки

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	const handleSort = direction => {
		props.onSort(direction)
		setSelectedSort(direction) // Устанавливаем выбранный метод сортировки
		setIsOpen(false)
	}

	return (
		<div className={styles.SortingContainer}>
			<p onClick={toggleMenu} className={styles.Sorting}>
				{props.listForSort[0]}
				<img
					src={isOpen ? minus : plus}
					alt={isOpen ? 'Minus icon' : 'Plus icon'}
					className={styles.Icon}
				/>
			</p>
			{isOpen && (
				<ul className={styles.DropdownMenu}>
					<li
						onClick={() => handleSort('asc')}
						className={`${styles.DropdownItem} ${
							selectedSort === 'asc' ? styles.Selected : ''
						}`}
					>
						<span className={styles.Circle}></span> {props.listForSort[1]}
					</li>

					
					<li
						onClick={() => handleSort('desc')}
						className={`${styles.DropdownItem} ${
							selectedSort === 'desc' ? styles.Selected : ''
						}`}
					>
						<span className={styles.Circle}></span> {props.listForSort[2]}
					</li>
				</ul>
			)}
		</div>
	)
}

export default AdminSorting
