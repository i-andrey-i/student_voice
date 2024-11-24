import { useState, useEffect } from 'react'
import TitleGraphAdmin from '../../components/TitleGraphAdmin/TitleGraphAdmin'
import AdminSorting from '../../components/AdminSorting/AdminSorting'
import styles from './RatingTable.module.css'

function RatingTable(props) {
	const titles = [
		[
			'Название института',
			'Полное название института',
			'Адрес института',
			'Рейтинг института',
			'Взаимодействия',
		],
		['Название предмета', 'Рейтинг предмета', 'Взаимодействия'],
		['ФИО', 'Рейтинг преподавателя', 'Взаимодействия'],
	]

	const data1 = [
		['1.1', '1.1', '1.1', '1.1', '1.1'],
		['1.2', '1.2', '1.2', '1.2', '1.2'],
		['1.3', '1.3', '1.3', '1.3', '1.3'],
		['1.4', '1.4', '1.4', '1.4', '1.4'],
		['1.5', '1.5', '1.5', '1.5', '1.5'],
		['1.6', '1.6', '1.6', '1.6', '1.6'],
		['1.7', '1.7', '1.7', '1.7', '1.7'],
		['1.8', '1.8', '1.8', '1.8', '1.8'],
	]

	const data2 = [
		['2.1', '2.1', '2.1', '2.1', '2.1'],
		['2.2', '2.2', '2.2', '2.2', '2.2'],
		['2.3', '2.3', '2.3', '2.3', '2.3'],
	]

	const data3 = [
		['3.1', '3.1', '3.1', '3.1', '3.1'],
		['3.2', '3.2', '3.2', '3.2', '3.2'],
	]

	const dataSets = [data1, data2, data3]

	const [sortedData, setSortedData] = useState([])
	const [sortDirection, setSortDirection] = useState('asc')

	useEffect(() => {
		const currentData = dataSets[props.current]
		setSortedData(currentData)
	}, [props.current]) 

	const sortData = () => {
		const newDirection = sortDirection === 'asc' ? 'desc' : 'asc'
		const compareIndex = 0 

		const sorted = [...sortedData].sort((a, b) => {
			const comparison = a[compareIndex].localeCompare(b[compareIndex])
			return newDirection === 'asc' ? comparison : -comparison
		})

		setSortedData(sorted)
		setSortDirection(newDirection)
	}

	return (
		<div className={styles.AllPage}>
			<div className={styles.Header}>
				<AdminSorting onSort={sortData} direction={sortDirection} />
			</div>
			<div className={styles.RatingTa}>
				{titles[props.current].map((item, index) => (
					<TitleGraphAdmin
						key={index}
						title={item}
						data={sortedData.map(row => row[index])}
					/>
				))}
			</div>
		</div>
	)
}

export default RatingTable
