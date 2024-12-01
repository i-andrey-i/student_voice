import { useState } from 'react'
import GoToAdmin from '../../components/GoToAdmin/GoToAdmin'
import RatingNav from '../../components/RatingNav/RatingNav'
import PageLayout from '../../shared/SpecialPages/PageLayout/PageLayout'
import RatingTable from '../../features/RatingTable/RatingTable'
import styles from './StatisticInstPage.module.css'
import HeaderMainPage from '../../components/HeaderMainPage/HeaderMainPage'

const StatisticInstPage = () => {
	const [activeMenu, setActiveMenu] = useState(0)

	const menu = ['Институты', 'Предметы', 'Преподаватели']

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
	]

	const data2 = [['2.1', '2.1', '2.1', '2.1', '2.1']]
	const data3 = [['3.1', '3.1', '3.1', '3.1', '3.1']]

	const [dataSets, setDataSets] = useState([data1, data2, data3])

	const listForSort = ['Сортировка', 'По возрастанию', 'По убыванию']

	const [name, setName] = useState('')
	const [fullName, setFullName] = useState('')
	const [address, setAddress] = useState('')

	const listForAdd = [
		// Добавление института
		{
			title: 'Добавить институт',
			fields: [
				{ label: 'Название', state: name, setState: setName },
				{ label: 'Полное название', state: fullName, setState: setFullName },
				{ label: 'Адрес', state: address, setState: setAddress },
			],
		},
		// Добавление предмета
		{
			title: 'Добавить предмет',
			fields: [{ label: 'Название предмета', state: name, setState: setName }],
		},
		// Добавление преподавателя
		{
			title: 'Добавить преподавателя',
			fields: [{ label: 'ФИО преподавателя', state: name, setState: setName }],
		},
	]

	return (
		<div>
			<HeaderMainPage />
			<PageLayout title='Рейтинг'>
				<div>
					<div className={styles.Comp}>
						<RatingNav
							activeMenu={activeMenu}
							setActiveMenu={setActiveMenu}
							list={menu}
						/>
						<RatingTable
							menu={menu[activeMenu]}
							current={activeMenu}
							titles={titles}
							dataSets={dataSets}
							setDataSets={setDataSets}
							listForSort={listForSort}
							listForAdd={listForAdd}
							name={name}
							setName={setName}
							fullName={fullName}
							setFullName={setFullName}
							address={address}
							setAddress={setAddress}
						/>
					</div>
					<GoToAdmin />
				</div>
			</PageLayout>
		</div>
	)
}

export default StatisticInstPage