import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav className="navHeader">
            <Link to='/'>
                <li>Noteful</li>
            </Link>
        </nav>
    )
}

export default Header