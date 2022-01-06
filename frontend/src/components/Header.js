import { useState} from 'react'
import '../styles/Header.css'

function Header() {
    const [isAuth, setIsAuth] = useState(false);

    return isAuth ? (
        <header className='header'>Bienvenue</header>
    ) : (
        <header className='header'>Veuillez vous connecter</header>
    )
}

export default Header;