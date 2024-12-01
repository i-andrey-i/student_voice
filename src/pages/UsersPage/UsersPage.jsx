import { useState } from 'react'
import GoToAdmin from '../../components/GoToAdmin/GoToAdmin'
import RatingNav from '../../components/RatingNav/RatingNav'
import PageLayout from '../../shared/SpecialPages/PageLayout/PageLayout'
import RatingTable from '../../features/RatingTable/RatingTable'
import HeaderMainPage from '../../components/HeaderMainPage/HeaderMainPage'
import styles from './UsersPage.module.css'

function UsersPage() {
	const [activeMenu, setActiveMenu] = useState(0)

	const menu = ['Админ', 'Преподаватель']

    const titles = [
			['ФИО', 'Роль', 'Институт', 'Взаимодействия'],
			['ФИО', 'Роль', 'Институт', 'Взаимодействия'],
		]

		const data1 = [
			['1.1', '1.1', '1.1', '1.1'],
			['1.2', '1.2', '1.2', '1.2',],
		]

		const data2 = [['2.1', '2.1', '2.1', '2.1']]

		const [dataSets, setDataSets] = useState([data1, data2])

		const listForSort = ['Институты', 'По адресу', 'По статусу']

        const [name, setName] = useState('')
		const [fullName, setFullName] = useState('')
		const [address, setAddress] = useState('')

        const listForAdd = [
					// Добавление админа
					{
						title: 'Добавить администратора',
						fields: [
							{ label: 'ФИО администратора', state: name, setState: setName },
							{ label: 'Роль', state: fullName, setState: setFullName },
							{ label: 'Институт', state: address, setState: setAddress },
						],
					},
					// Добавление преподавателя
					{
						title: 'Добавить преподавателя',
						fields: [
							{ label: 'ФИО преподавателя', state: name, setState: setName },
							{ label: 'Роль', state: fullName, setState: setFullName },
							{ label: 'Институт', state: address, setState: setAddress },
						],
					},
				]

	return (
		<div>
			<HeaderMainPage />
			<PageLayout title='Пользователи'>
				{
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
				}
			</PageLayout>
		</div>
	)
}

export default UsersPage
