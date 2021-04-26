import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="green">
                <div className="nav-wrapper">
                    <Link to='/' className="brand-logo">Notebook</Link>
                    <ul id="nav-mobile" className="right">
                        <li><NavLink to='/favorite-notes'>Favarites</NavLink></li>
                       
                    </ul>
                </div>
            </nav>
        

        </div>
    )
}
