import React from "react";
import { Link } from "react-router-dom";

import spaceDreams from '../../images/Space_Dreams.svg';

import './Header.css';

const Header = () => {

    return (
        <header>
            <div className="header">
                <img src={spaceDreams} width='150px' />
                <nav>
                    <ul className="nav_header">
                        <Link className="link" to={'/auth'}>
                            <li>Лента идей</li>
                        </Link>
                        <Link className="link" to={'/auth'}>
                            <li>Мои идеи</li>
                        </Link>
                        <Link className="link" to={'/auth'}>
                            <li>Мои проекты</li>
                        </Link>
                    </ul>
                </nav>

                <Link className="link" to={'/auth'}>
                    Войти
                </Link>
            </div>
        </header>
    )
}

export default Header;