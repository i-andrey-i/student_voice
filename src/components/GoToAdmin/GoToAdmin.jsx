import styles from './GoToAdmin.module.css'
import { Link } from 'react-router-dom'

function GoToAdmin() {
  return (
		<div className={styles.ButtonSt}>
			<Link to={`/`} className={styles.link}> Перейти на главную страницу</Link>
		</div>
	)
}

export default GoToAdmin;