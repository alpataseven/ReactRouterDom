import { NavLink } from "react-router"
import navbarItem from "./navbarItem.json"

const Navbar = () => {

    return (
        <nav id="navigation-bar" className="navbar navbar-expand-lg bg-body-tertiary container-fluid mb-3">
            <div className="container">
                <div>
                    <a className="navbar-brand text-light fw-bold" href="#">Store 34</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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