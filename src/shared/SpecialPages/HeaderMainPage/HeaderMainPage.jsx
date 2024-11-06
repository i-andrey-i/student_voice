import './HeaderMainPage.css'
import logo from '../../images/logo_urfu (1).png'
import but from '../../images/Round_Open.png'
import close from '../../images/Close.png'
import { useState } from 'react'

function HeaderMainPage() {
    const[menuOpen, setMenuOpen] = useState(false)
    const HandleClick = () =>{
        setMenuOpen(!menuOpen)
    }

    return (
			<div className='Class'>
				<button className='roundButton' onClick={HandleClick}>
					<img src={menuOpen ? close : but} alt='Меню' className='but' />
				</button>
				<img src={logo} alt='Логотип УрФУ' className='logo' />

				<div className={`side-nav ${menuOpen ? 'open' : ''}`}>
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