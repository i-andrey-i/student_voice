import { useState, useEffect } from 'react'
import { authUser, getMe } from './AuthApi/AuthApi'
import './AuthForm.css'
import MyButton from '../../shared/UI/Button/MyButton'
import MyInput from '../../shared/UI/Input/MyInput'
import { useNavigate } from 'react-router-dom'

function AuthForm() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [formValid, setFormValid] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		setFormValid(username && password)
	}, [username, password])

	const onSubmit = (formInfo) => {
		try {
			console.log('Поехали!')

			authUser(formInfo).then(data=>{
				console.log('POST запрос отрпботал', data.access_token)
				if (data.access_token) {
					localStorage.setItem('accessToken', data.accessToken)

					getMe().then(data => {
						console.log('Функция GetMe отработала')
						console.log(data, data.id)
						if (data.id) {
							localStorage.setItem('userId', data.id)
							navigate(`mainAdminPage/${data.id}`)
						} 
						else {
							localStorage.removeItem('accessToken')
						}
					})
				}
			})

		} 
		catch (error) {console.error(error)}
	}

	return (
		<div className='App'>
			<form
				className='form'
				onSubmit={e => {
					e.preventDefault()
					onSubmit({username, password })
				}}
			>
				<b>Авторизация</b>
				<MyInput
					value={username}
					onChange={e => setUsername(e.target.value)}
					name={'login'}
					type={'login'}
					placeholder={'Логин'}
				/>

				<MyInput
					value={password}
					onChange={e => setPassword(e.target.value)}
					name={'password'}
					type={'password'}
					placeholder={'Пароль'}
				/>

				<MyButton
					className='buttonAuth'
					disabled={!formValid}
					type={'submit'}
					message={'Войти'}
					styles={{ color: 'white', background: '#1E4391' }}
				/>
			</form>
		</div>
	)
}

export default AuthForm
