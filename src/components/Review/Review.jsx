import Stars from '../Stars/Stars';
import styles from './Review.module.css'

// ['status', 'subject', 'date', 'lesson', 2, 4]
function Review({title}) {
	const stars = Array(5).fill(0)


	return (
		<div className={styles.Block}>
			<p className={styles.Title}>{title[0]}</p>
			<p className={styles.TextMain}>{title[1]}</p>

			<div className={styles.TextBlock}>
				<p className={styles.TextMain}>{title[2]}</p>
				<p className={styles.Less}>{title[3]}</p>
			</div>

			<Stars title={'Оценка подачи материала'} countStar={title[4]} />
			<Stars title={'Оценка формата пары'} countStar={title[5]} />
		</div>
	)
}

export default Review;