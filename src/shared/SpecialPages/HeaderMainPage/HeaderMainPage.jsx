import styles from './HeaderMainPage.module.css'
import logo from '../../images/logo_urfu (1).svg'
import but from '../../images/Round_Open.svg'
import close from '../../images/Close.svg'
import { useState } from 'react'

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
						<li><a href='#'>Рейтинги</a></li>
						<li><a href='#'>Пользователи</a></li>
						<li><a href='#'>Пары</a></li>
					</ul>
				</div>
			</div>
		)
}

export default HeaderMainPage;