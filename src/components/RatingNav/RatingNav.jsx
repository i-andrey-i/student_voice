import styles from './RatingNav.module.css'

function RatingNav(props) {
	const handleClick = (index) => {
		props.setActiveMenu(index) // Устанавливаем активный элемент при клике
	}

	return (
		<div className={styles.Nav}>
			<ul>
				{props.list.map((item, index) => (
					<li
						key={index}
						onClick={() => handleClick(index)}
						className={props.activeMenu === index ? styles.active : ''}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default RatingNav
