import React from 'react'
import PostInfo from './PostInfo'
import PropTypes from 'prop-types'

export default function Comment({ comment }) {
    return (
        <div className="comment-container">
            <PostInfo user={comment.by} time={comment.time}/>
            <p dangerouslySetInnerHTML={{__html : comment.text}}></p>
        </div>
    )
}

Comment.propTypes = {
    comment : PropTypes.object.isRequired
}