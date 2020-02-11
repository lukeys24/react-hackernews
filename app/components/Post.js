import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({ link, time, title, user, comments }) {
    return (
        <div className="post">
            <a className="link" href={link}>
                {title}
            </a>
            <div className="info">
                <span>by <Link to="/" className="info-link">{user}</Link></span>
                <span>on {time}</span>
                <span>with <Link to="/" className="info-link">{comments}</Link> comments</span>
            </div>
        </div>
    )
}