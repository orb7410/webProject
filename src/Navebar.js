// import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Navbar.css';
import { Link, Outlet} from 'react-router-dom';

const Navbar = () => {
    const click = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/" aria-label="Home">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>

                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/" aria-label="Home">Home</a>
                        </li>
                        <li class="nav-item" onClick={ () => click("About-me")}>
                        <Link class="nav-link" href="/" aria-label="About">About</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/" aria-label="My Account">My Account</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/find-jewelry" class="nav-link" aria-label="Find my jewelry">Find my jewelry</Link>
                        </li>
                        <li class="nav-item" onClick={ () => click("contact")}>
                            <Link class="nav-link" href="/" aria-label="Contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/" aria-label="Q&A">Q&A</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="outlet-container">
            <Outlet/>
            </div>

        </>
    )
}

export default Navbar;