import React from 'react'
import { Link } from 'react-router-dom'
import PropType from 'prop-types'
import { formatDate } from '../utils//helper'

export default function Post({ link, time, title, user, comments }) {
    return (
        <div className="post">
            <a className="link" href={link}>
                {title}
            </a>
            <div className="info">
                <span>by <Link to={{pathname: "/user", search: `?id=${user}`}} className="info-link">{user}</Link></span>
                <span>on {formatDate(time)}</span>
                <span>with <Link to="/" className="info-link">{comments}</Link> comments</span>
            </div>
        </div>
    )
}

Post.propTypes = {
    link : PropType.string.isRequired,
    time : PropType.number.isRequired,
    title : PropType.string.isRequired,
    user : PropType.string.isRequired,
    comments : PropType.number.isRequired
}