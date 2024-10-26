import {useState, useEffect} from 'react'
import { authUser, getMe } from './AuthApi/AuthApi'
import logo from '../../shared/images/logo_urfu.png'
import './Auth.css'
import MyButton from '../../shared/UI/Button/MyButton'
import MyInput from '../../shared/UI/Input/MyInput'


function Auth() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [formValid, setFormValid] = useState('')

	useEffect(() => {
			setFormValid(email && password)		
		}, [email,password]
	)

	const onSubmit = (formInfo) =>{
		console.log(formInfo)
		try{
			const data = authUser(formInfo)
			if (data.accessToken){
				localStorage.setItem('accessToken', data.accessToken)
				const userData = getMe()
				if (userData.id){
					localStorage.setItem('userId', userData.id)
					navigate(`mainAdminPage/${userData.id}`)
				}
				else{
					localStorage.removeItem('accessToken')
				}

			}
		}
		catch(error){
			console.error(error)
		}
		
	}

	return (
		<div className='AuthPage'>
			<img src={logo} alt='Логотип УрФУ' className='logo'/>
			<div className='App'>
				<form className='form' onSubmit={(e) => {e.preventDefault(); onSubmit({email, password})}}>
					<b>Авторизация</b>
					<MyInput
						value={email}
						onChange={e => setEmail(e.target.value)}
						name={'email'}
						type={'email'}
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
						disabled={!formValid}
						type={'submit'}
						message={'Войти'}
						styles={{ color: 'white', background: '#1E4391' }}
					/>
				</form>
			</div>
		</div>
	)
}

export default Auth
