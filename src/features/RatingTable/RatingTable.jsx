import { useState, useEffect } from 'react'
import TitleGraphAdmin from '../../components/TitleGraphAdmin/TitleGraphAdmin'
import AdminSorting from '../../components/AdminSorting/AdminSorting'
import AddNewSmth from '../../components/AddNewSmth/AddNewSmth' 
import styles from './RatingTable.module.css'

const RatingTable = (props) => {
	const [sortedData, setSortedData] = useState([])
	const [sortDirection, setSortDirection] = useState('asc')

	useEffect(() => {
		const currentData = props.dataSets[props.current]
		setSortedData(currentData)
	}, [props.current, props.dataSets])

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

	const addData = newInstitute => {
		const updatedDataSets = [...props.dataSets]
		updatedDataSets[props.current].push(newInstitute)
		props.setDataSets(updatedDataSets)
		setSortedData(updatedDataSets[props.current]) // Обновляем отображаемые данные
	}

	return (
		<div className={styles.AllPage}>
			<div className={styles.Header}>
				<AdminSorting
					onSort={sortData}
					direction={sortDirection}
					listForSort={props.listForSort}
				/>
				<AddNewSmth
					onAdd={addData}
					current={props.current}
					listForAdd={props.listForAdd}
					name={props.name}
					setName={props.setName}
					fullName={props.fullName}
					setFullName={props.setFullName}
					address={props.address}
					setAddress={props.setAddress}
				/>
			</div>
			<div className={styles.RatingTa}>
				{props.titles[props.current].map((item, index) => (
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
