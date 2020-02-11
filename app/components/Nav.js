import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
    color: "rgb(187, 46, 31)"
}

export default function Nav() {
    return (
        <nav>
            <ul className="row">
                <li>
                    <NavLink
                        exact
                        className="nav-link"
                        to="/"
                        activeStyle={activeStyle}
                    >
                        Top
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        exact
                        className="nav-link"
                        to="new"
                        activeStyle={activeStyle}
                    >
                        New
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
