import HeaderMainPage from "../../shared/SpecialPages/HeaderMainPage/HeaderMainPage";
import './AdminMainPage.css'

function AdminMainPage() {
  return (
		<div className='MainClass'>
			<HeaderMainPage />
			<p className='Greeting'>Добро пожаловать, админ!</p>
		</div>
	)
}

export default AdminMainPage;