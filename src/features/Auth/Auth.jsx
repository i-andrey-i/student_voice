import React from 'react'
import { useFormHandlers } from './formHandlers'
import logo from '../../shared/images/logo_urfu.png'
import './Auth.css'
import { MyButton, MyInput } from '../../shared/UI'


function Auth() {
	const {
		email, password, setPassword,
		emailError, emailDirty, formValid,
		emailHandler, blurHandler,
	} = useFormHandlers()

	return (
		<div className='App'>
			<img src={logo} alt='' />
			<form className='form'>
				<h1>Авторизация</h1>

				{emailError && emailDirty && (
					<div className='warning'>
						<b>{emailError}</b>
					</div>
				)}
				<MyInput
					value={email}
					onChange={emailHandler}
					onBlur={blurHandler}
					name={'email'}
					type={'text'}
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
