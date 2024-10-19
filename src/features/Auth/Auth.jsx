import {React, useState, useEffect} from 'react'
import logo from '../../shared/images/logo_urfu.png'
import './Auth.css'
import MyButton from '../../shared/UI/Button/MyButton'
import MyInput from '../../shared/UI/Input/MyInput'


function Auth() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [formValid, setFormValid] = useState('')

	useEffect(() => {
			if (email && password) {setFormValid(true)}
			else{setFormValid(false)}		
		}, [email,password]
	)

	return (
		<div className='App'>
			<img src={logo} alt='' />
			<form className='form'>
				<h1>Авторизация</h1>

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
					styles={{ color: '', background: '#1E4391' }}
				/>
			</form>
		</div>
	)
}

export default Auth
