import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__nav">
                <div className="navbar__nav__logo">
                    <span>Logo</span>
                </div>

                <ul className="navbar__nav__links">
                    <li className="navbar__nav__links__item">
                        <a className="navbar__nav__links__item__link" href="http://" target="_blank" rel="noopener noreferrer">Lorem</a>
                    </li>
                    <li className="navbar__nav__links__item">
                        <a className="navbar__nav__links__item__link" href="http://" target="_blank" rel="noopener noreferrer">Lorem</a>
                    </li>
                    <li className="navbar__nav__links__item">
                        <a className="navbar__nav__links__item__link" href="http://" target="_blank" rel="noopener noreferrer">Lorem</a>
                    </li>
                    <li className="navbar__nav__links__item">
                        <a className="navbar__nav__links__item__link" href="http://" target="_blank" rel="noopener noreferrer">Lorem</a>
                    </li>
                    <li className="navbar__nav__links__item">
                        <a className="navbar__nav__links__item__link" href="http://" target="_blank" rel="noopener noreferrer">Lorem</a>
                    </li>
                </ul>
                <div className="navbar__nav__user-settings">
                    settings
                </div>
                <div className="navbar__nav__menu">
                <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </nav>
    )
}
