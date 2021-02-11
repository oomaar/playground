import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: '#fff',
    };

    return (
        <div>
            <nav>
                <Link to="/">
                    <h3>logo</h3>
                </Link>
                <ul className="nav-link">
                    <Link style={navStyle} to="/about">
                        <li>
                            About
                        </li>
                    </Link>

                    <Link style={navStyle} to="/shop">
                        <li>
                            Shop
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
