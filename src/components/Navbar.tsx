import { faBars, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { setLogOut } from "../features/auth/authSlice";

export const Navbar = () => {

    const [openedMenu, setOpenedMenu] = useState(false);

    const idUser = useSelector((state: RootState) => state.authReducer.userInfo?.id)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openMenu = () => {
        setOpenedMenu(!openedMenu)
    }

    const logOut = () => {
        dispatch(setLogOut())
        navigate('/', {replace: true})
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
                        <NavLink className="navbar__nav__links__item__link text-dec-none" to="/" >Inicio</NavLink>
                    </li>
                    {idUser ?
                        <li className="navbar__nav__links__item">
                            <NavLink className="navbar__nav__links__item__link text-dec-none" to="/mascotas" >Mis Mascotas</NavLink>
                        </li> : ''
                    }
                    <li className="navbar__nav__links__item">
                        <NavLink className="navbar__nav__links__item__link text-dec-none" to="/servicios" >Servicios</NavLink>
                    </li>
                    <li className="navbar__nav__links__item">
                        <NavLink className="navbar__nav__links__item__link text-dec-none" to="/contacto" >Contacto</NavLink>
                    </li>
                    {!idUser ?
                        <>
                            <li className="navbar__nav__links__item">
                                <NavLink className="navbar__nav__links__item__link text-dec-none" to="/registro" >Registro</NavLink>
                            </li>
                            <li className="navbar__nav__links__item">
                                <NavLink className="btn text-dec-none" to="/login" >Iniciar sesión</NavLink>
                            </li>
                        </>
                        :
                        <li className="navbar__nav__links__item">
                            <button className="btn " onClick={logOut} >Cerrar sesión</button>
                        </li>
                    }
                </ul>
                {idUser ? <div className="navbar__nav__user-settings"
                    style={styleOpen}
                >
                    <FontAwesomeIcon icon={faGear} />
                </div> : ''}
                <div className="navbar__nav__menu" onClick={openMenu}>
                    <FontAwesomeIcon className="navbar__nav__menu__icon" icon={faBars} />
                </div>
            </div>
        </nav>
    )
}
