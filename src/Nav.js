import ironhackLogo from"./ironhack-logo.svg"
import menuTop from"./menu-top.svg"
import './Nav.css'

const Nav = () => {
    return(
        <nav>
            <img src={ironhackLogo} alt='logo'/>
            <img src={menuTop} alt='menu hamburger pic'/>
        </nav>
    )
}

export default Nav