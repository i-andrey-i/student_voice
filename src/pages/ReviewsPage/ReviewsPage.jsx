
import GoToAdmin from '../../components/GoToAdmin/GoToAdmin'
import PageLayout from '../../shared/SpecialPages/PageLayout/PageLayout'
import styles from './ReviewsPage.module.css'
import HeaderMainPage from '../../components/HeaderMainPage/HeaderMainPage'

function ReviewsPage() {
	return (
		<div>
            <HeaderMainPage/>
			<PageLayout title='Пары'>
				{
					<div>
						<div className={styles.Comp}>
							{/* тут будет отрисовка отзывов */}
						</div>
						<GoToAdmin />
					</div>
				}
			</PageLayout>
		</div>
	)
}

export default ReviewsPage
