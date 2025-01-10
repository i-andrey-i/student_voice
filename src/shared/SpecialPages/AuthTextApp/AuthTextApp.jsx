import styles from './AuthTextApp.module.css'

function AuthTextApp({onButtonClick}) {
  return (
		<div className={styles.info}>
			<p className={styles.title}>STUDENT VOICE</p>

			<div className={styles.blockText}>
				<p className={styles.disc}>
					Соберите и проанализируйте отзывы студентов о проведенных учебных
					занятиях. Обеспечьте обратную связь от студентов для улучшения
					качества образовательного процесса.
				</p>
				<button className={styles.butt} onClick={onButtonClick}>Войти </button>
			</div>
		</div>
	)
}

export default AuthTextApp;