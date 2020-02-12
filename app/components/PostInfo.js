import React from 'react'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helper'
import { ThemeConsumer } from '../contexts/theme'

export default function PostInfo({ user, time, id, comments }) {
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <div className="info">
                    <span>by <Link className={`info-link ${theme}-text`} to={{pathname: "/user", search: `?id=${user}`}}>{user}</Link></span>
                    <span>on {formatDate(time)}</span>
                    {comments >= 0 && 
                        <span>with <Link className={`info-link ${theme}-text`} to={{pathname: "/post", search: `?id=${id}`}}>{comments}</Link> comments</span>     
                    }
                </div>
            )}
        </ThemeConsumer>
    )
}

PostInfo.propTypes = {
    user : PropType.string.isRequired,
    time : PropType.number.isRequired,
    id : PropType.number,
    comments : PropType.number
}