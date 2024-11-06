import './AuthTextApp.css'

function AuthTextApp({onButtonClick}) {
  return (
		<div className='info'>
			<p className='title'>STUDENT VOICE</p>

			<div className='blockText'>
				<p className='disc'>
					Соберите и проанализируйте отзывы студентов о проведенных учебных
					занятиях. Обеспечьте обратную связь от студентов для улучшения
					качества образовательного процесса.
				</p>
				<button className='butt' onClick={onButtonClick}>Войти </button>
			</div>
		</div>
	)
}

export default AuthTextApp;