import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
    color: "rgb(218, 13, 13)"
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
