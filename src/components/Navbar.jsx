import { NavLink } from "react-router"
import navbarItem from "./navbarItem.json"

const Navbar = () => {

    return (
        <nav id="navigation-bar" className="navbar navbar-expand-lg mb-3">
            <div className="container">
                    <NavLink className="navbar-brand text-light fw-bold" to="/">Store 34</NavLink>
                <div id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navbarItem.map(item => (
                            <li className="nav-item">
                                <NavLink key={item.id} className="nav-link fw-semibold" aria-current="page" to={item.href}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar