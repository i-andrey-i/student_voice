import { useState, useEffect } from 'react';
import './App.css';
import logo from './logo_urfu.png'

function App() {
  // состояния на заполнение input полей
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  // Состояние на правильную запись email
  const [emailError, setEmailError] = useState('')

  // Состояние на проверку были ли в input поле или нет
  const [emailDirty, setEmailDirty] = useState(false)

  // Состояние на блокирование формы
  const [formValid, setFormValid] = useState(false)

  const emailHandler = (e) =>{
    setEmail(e.target.value)
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!re.test(String(e.target.value).toLowerCase())){
      setEmailError('Email некорректный')
    } else{
      setEmailError('')
    }
  }

  const blurHandler = (e) =>{
    if(e.target.name === 'email'){
      setEmailDirty(true)
    }
  }

  useEffect( () =>{
    if(emailError){
      setFormValid(false)
    } else{
      setFormValid(true)
    }
  }, [emailError])

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
				<input
					value={email}
					onChange={e => emailHandler(e)}
					onBlur={e => blurHandler(e)}
					name='email'
					type='text'
					placeholder='Логин'
				/>

				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					name='password'
					type='password'
					placeholder='Пароль'
				/>
				<button disabled={!formValid} type='submit'>
					Войти
				</button>
			</form>
		</div>
	)
}

export default App;
