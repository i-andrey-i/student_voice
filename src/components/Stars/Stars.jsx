import styles from './Stars.module.css'

function Stars({title, countStar}) {
    const stars = Array(5).fill(0);
    return (
			<div className={styles.MarkBlock}>
				<p className={styles.TextMain}>{title}</p>
				<div className={styles.rating}>
					{stars.map((_, index) => (
						<span
							key={index}
							className={`${styles.star} ${
								index < countStar ? styles.filled : ''
							}`}
							data-value={index + 1}
						>
							&#9733; 
						</span>
					))}
				</div>
			</div>
		)
}

export default Stars;