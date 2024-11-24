import { useState } from 'react'
import GoToAdmin from '../../components/GoToAdmin/GoToAdmin'
import RatingNav from '../../components/RatingNav/RatingNav'
import PageLayout from '../../shared/SpecialPages/PageLayout/PageLayout'
import RatingTable from '../../features/RatingTable/RatingTable'
import styles from './StatisticInstPage.module.css'

function StatisticInstPage() {
	const [activeMenu, setActiveMenu] = useState(0)

	const menu = ['Институты', 'Предметы', 'Преподаватели']
	return (
		<PageLayout title='Рейтинг'>
			{
				<div>
					<div className={styles.Comp}>
						<RatingNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
						<RatingTable menu={menu[activeMenu]} current={activeMenu} />
					</div>
					<GoToAdmin />
				</div>
			}
		</PageLayout>
	)
}

export default StatisticInstPage
