import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return(
            <nav className="navHeader">
                <Link to='/'>
                    <li>Noteful</li>
                </Link>
            </nav>
        )
    }
}