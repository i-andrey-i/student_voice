import HeaderMainPage from "../../shared/SpecialPages/HeaderMainPage/HeaderMainPage";
import styles from './AdminMainPage.module.css'

function AdminMainPage() {
  return (
		<div className={styles.MainClass}>
			<HeaderMainPage />
			<p className={styles.Greeting}>Добро пожаловать, админ!</p>
		</div>
	)
}

export default AdminMainPage;