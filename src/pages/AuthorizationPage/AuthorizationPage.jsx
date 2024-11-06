import { useState } from 'react'
import AuthForm from '../../features/Auth/AuthForm'
import logo from '../../shared/images/logo_urfu.png'
import AuthTextApp from '../../shared/SpecialPages/AuthTextApp/AuthTextApp'
import './AuthorizationPage.css'


function AuthorizationPage() {
	const [showAuthForm, setShowAuthForm] = useState(false)

	const handleButtonClick = () => {
		setShowAuthForm(true)
	}

	return (
		<div className='AuthPage'>
			<img src={logo} alt='Логотип УрФУ' className='logo' />
			{!showAuthForm ? (<AuthTextApp onButtonClick={handleButtonClick}/>) : (<AuthForm/>)}
		</div>
	)
}

export default AuthorizationPage
