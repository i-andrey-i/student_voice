import styles from './Rating.module.css'
import cup from '../../shared/images/Cup.svg'
import StatisticItem from '../../components/StatisticItem/StatisticItem'
import PageLayout from '../../shared/SpecialPages/PageLayout/PageLayout'

function RatingAdmin() {
	// тестовый набор данных
	const items = [
		{ id: 1, institute: 'ИРИТ-РТФ', value: 4.8 },
		{ id: 2, institute: 'УГИ', value: 4.5 },
		{ id: 3, institute: 'ИнЭУ', value: 4.2 },
		{ id: 4, institute: 'ИнЭУ', value: 4.2 },
		{ id: 5, institute: 'ИнЭУ', value: 4.2 },
		{ id: 6, institute: 'ИнЭУ', value: 4.2 },
		{ id: 7, institute: 'ИнЭУ', value: 4.2 },
		{ id: 8, institute: 'ИнЭУ', value: 4.2 },
		{ id: 9, institute: 'ИнЭУ', value: 4.2 },
		{ id: 10, institute: 'ИнЭУ', value: 4.2 },
	]

	const calculateValue = (items) =>{
		const total = items.reduce((accumulator, item) => accumulator + item.value, 0)
		return total / items.length
	}
	
  	const averageValue = calculateValue(items) 


	return (
		<PageLayout title='Добро пожаловать, Админ!'>
			{
				<div className={styles.Rating}>
				<p className={styles.title}>Рейтинг институтов</p>
				<div className={styles.cupcur}>
					<img src={cup} alt='Средний балл' />
					<p className={styles.round}> {averageValue.toFixed(1)}</p>
				</div>
				<p className={styles.st}>Средняя оценка институтов по университету</p>
				{items.map(item => (
					<StatisticItem
						key={item.id}
						data={item}
						index={item.id}
						total={items.length}
					/>
				))}
			</div>
			}
		</PageLayout>
	)
}

export default RatingAdmin;