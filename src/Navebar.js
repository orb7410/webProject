// import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/" aria-label="Home">
                 <img src={logo} className="App-logo" alt="logo" />
            </a>

            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/" aria-label="Home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/" aria-label="About">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/" aria-label="Find my jewlery">Find my jewlery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/" aria-label="Contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/" aria-label="Q&A">Q&A</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;