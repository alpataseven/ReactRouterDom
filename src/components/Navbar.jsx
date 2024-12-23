import navbarItem from "./navbarItem.json"

const Navbar = () => {

    return (
            <nav id="navigation-bar" className="navbar navbar-expand-lg bg-body-tertiary container-fluid">
                <div className="container">
                    <a className="navbar-brand text-light fw-bold" href="#">Store 34</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navbarItem.map(item => (
                                <li className="nav-item">
                                    <a key={item.id} className="nav-link active text-light" aria-current="page" href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                        <form className="d-flex align-items-center" role="search">
                            <input id="search-input" className="form-control me-2" type="search" placeholder="Ürün Ara" aria-label="Search" />
                            <a href="#"><button class="bn632-hover bn22"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg></button></a>
                        </form>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar