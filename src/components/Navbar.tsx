import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NavLink } from "react-router-dom";

export const Navbar = () => {

    const [openedMenu, setOpenedMenu] = useState(false);


    const openMenu = () => {
        setOpenedMenu(!openedMenu)
    }

    const styleOpen = {
        display: `${openedMenu ? '' : 'flex'}`
    }

    return (
        <nav className="navbar">
            <div className="navbar__nav">
                <div className="navbar__nav__logo">
                    <span>VetCare</span>
                </div>

                <ul className="navbar__nav__links" style={styleOpen}>
                    <li className="navbar__nav__links__item">
                        <NavLink className="navbar__nav__links__item__link" to="/" >Inicio</NavLink>
                    </li>
                    <li className="navbar__nav__links__item">
                        <NavLink className="navbar__nav__links__item__link" to="/mascotas" >Mis Mascotas</NavLink>
                    </li>
                    <li className="navbar__nav__links__item">
                        <NavLink className="navbar__nav__links__item__link" to="/servicios" >Servicios</NavLink>
                    </li>
                    <li className="navbar__nav__links__item">
                        <NavLink className="navbar__nav__links__item__link" to="/contacto" >Contato</NavLink>
                    </li>
                    <li className="navbar__nav__links__item">
                        <NavLink className="navbar__nav__links__item__link" to="/registro" >registro</NavLink>
                    </li>
                    <li className="navbar__nav__links__item">
                        <NavLink className="navbar__nav__links__item__link" to="/login" >login</NavLink>
                    </li>
                </ul>
                <div className="navbar__nav__user-settings"
                    style={styleOpen}
                >
                    settings
                </div>
                <div className="navbar__nav__menu" onClick={openMenu}>
                    <FontAwesomeIcon className="navbar__nav__menu__icon" icon={faBars} />
                </div>
            </div>
        </nav>
    )
}
