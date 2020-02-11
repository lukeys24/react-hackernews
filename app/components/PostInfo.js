import React from 'react'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helper'

export default function PostInfo({ user, time, id, comments }) {
    return (
        <div className="info">
            <span>by <Link to={{pathname: "/user", search: `?id=${user}`}} className="info-link">{user}</Link></span>
            <span>on {formatDate(time)}</span>
            {comments && 
                <span>with <Link to={{pathname: "/post", search: `?id=${id}`}} className="info-link">{comments}</Link> comments</span>     
            }
        </div>
    )
}

PostInfo.propTypes = {
    user : PropType.string.isRequired,
    time : PropType.number.isRequired,
    id : PropType.number,
    comments : PropType.number
}