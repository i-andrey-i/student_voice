import { useState } from 'react'
import AuthForm from '../../features/Auth/AuthForm'
import logo from '../../shared/images/logo_urfu.svg'
import AuthTextApp from '../../shared/SpecialPages/AuthTextApp/AuthTextApp'
import styles from './AuthorizationPage.module.css'


function AuthorizationPage() {
	const [showAuthForm, setShowAuthForm] = useState(false)

	const handleButtonClick = () => {
		setShowAuthForm(true)
	}

	return (
		<div className={styles.AuthPage}>
			<img src={logo} alt='Логотип УрФУ' className={styles.logo} />
			{!showAuthForm ? (<AuthTextApp onButtonClick={handleButtonClick}/>) : (<AuthForm/>)}
		</div>
	)
}

export default AuthorizationPage
