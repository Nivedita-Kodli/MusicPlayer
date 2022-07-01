import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu(props) {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">Music LIbrary</NavLink>

                <button className="navbar-toggler" data-bs-target="#Menu" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to= {"/home"} className="nav-link">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Menu