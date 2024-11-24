import styles from './HeaderMainPage.module.css'
import logo from '../../shared/images/logo_urfu_main.svg'
import but from '../../shared/images/Round_Open.svg'
import close from '../../shared/images/Close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function HeaderMainPage() {
    const[menuOpen, setMenuOpen] = useState(false)
    const HandleClick = () =>{
        setMenuOpen(!menuOpen)
    }

    return (
			<div className={styles.Class}>
				<button className={styles.roundButton} onClick={HandleClick}>
					<img src={menuOpen ? close : but} alt='Меню' />
				</button>
				<img src={logo} alt='Логотип УрФУ' className={styles.logo} />

				<div className={`${styles.sideNav} ${menuOpen ? styles.open : ''}`}>
					<ul>
						<li><Link to={`/mainAdminPage/rating`}>Рейтинги </Link></li>
						<li><a href='#'>Пользователи</a></li>
						<li><a href='#'>Пары</a></li>
					</ul>
				</div>
			</div>
		)
}

export default HeaderMainPage;