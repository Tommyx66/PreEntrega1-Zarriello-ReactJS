import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Sonic Synergy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link inicio" href="#">
                                    <p>Inicio</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Guitarras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Bajos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sintetizadores</a>
                            </li>
                            <li className="cart-widget">
                                <CartWidget/>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            

        </header>
    )
}

export default NavBar