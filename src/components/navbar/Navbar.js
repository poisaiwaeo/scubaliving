import React from 'react'
//Navbar links
import { Link, NavLink, withRouter } from 'react-router-dom';
import logo from '../../images/logo.png';
import Login from '../login/Login';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light h-auto">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav m-auto mt-5 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span> </Link>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dykkerudstyr">Dykkerudstyr</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dykkerrejser">Dykkerrejser</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dykkerkurser">Dykkerkurser</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/kontakt">Kontakt</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/omos">Om os</NavLink>
                        </li>

                    </ul>

                    <form className="force-inline  nav__form  my-2 my-lg-0 d-flex">
                        <input className="form-control nav__input my-auto" type="search" />
                        <button className="btn btn-outline-success my-2 my-sm-0 border-0" type="submit">SØG</button>
                    </form>

                    <div className="login__container">

                        <div className="login__icon">
                            <i class="fas fa-key"></i>
                        </div>

                        <div className="login__text">
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                           </li>
                        </div>

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
