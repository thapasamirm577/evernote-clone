import { Button } from '@material-ui/core'
import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { auth } from '../../config/fbconfig'

export const Navbar = () => {
   
    return (
        <div>
            <nav className="green">
                <div className="nav-wrapper">
                    
                    {/* Note Name */}
                    <Link to='/' className="brand-logo">Notebook</Link>
                    
                    {/* Note main action */}
                    <ul id="nav-mobile" className="right">
                        <li><NavLink to='/favorite-notes'>Favarites</NavLink></li>
                        <Button style={{color:'white'}} onClick={()=>auth.signOut()}>Log Out</Button>
                    </ul>
                </div>
            </nav>
        

        </div>
    )
}
