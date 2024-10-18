// formHandlers.js
import { useState, useEffect } from 'react'

export const useFormHandlers = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [formValid, setFormValid] = useState(false)

	const emailHandler = e => {
		setEmail(e.target.value)
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Email некорректный')
		} else {
			setEmailError('')
		}
	}

	const blurHandler = e => {
		if (e.target.name === 'email') {
			setEmailDirty(true)
		}
	}

	useEffect(() => {
		setFormValid(!emailError)
	}, [emailError])

	return {
		email,
		password,
		setPassword,
		emailError,
		emailDirty,
		formValid,
		emailHandler,
		blurHandler,
	}
}
