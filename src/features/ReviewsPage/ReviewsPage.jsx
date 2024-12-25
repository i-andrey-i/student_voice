import GoToAdmin from '../../components/GoToAdmin/GoToAdmin'
import PageLayout from '../../shared/SpecialPages/PageLayout/PageLayout'
import styles from './ReviewsPage.module.css'
import HeaderMainPage from '../../components/HeaderMainPage/HeaderMainPage'
import Review from '../../components/Review/Review'

function ReviewsPage() {
	const dataReviews = [
		['Студент 1', 'Системная аналитика', '22.11.2024', '3 пара', 5, 2],
		['status', 'subject', 'date', 'lesson', 2, 4],
		['status', 'subject', 'date', 'lesson', 2, 4],
		['status', 'subject', 'date', 'lesson', 2, 4],
	]

	return (
		<div>
			<HeaderMainPage />
			<PageLayout title='Отзывы студентов'>
				{
					<div>
						<div className={styles.Comp}>
							{dataReviews.map((item, index) => (
								<Review key={index} title={item} />
							))}
						</div>
						<GoToAdmin />
					</div>
				}
			</PageLayout>
		</div>
	)
}

export default ReviewsPage
