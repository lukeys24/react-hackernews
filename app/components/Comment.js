import React from 'react'
import PostInfo from './PostInfo'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contexts/theme'

export default function Comment({ comment }) {
    return (
        <ThemeConsumer>
            {({ theme }) => (
                 <div className={`comment-container ${theme}-comment-container`}>
                    <PostInfo user={comment.by} time={comment.time}/>
                    <p dangerouslySetInnerHTML={{__html : comment.text}}></p>
                </div>
            )}  
        </ThemeConsumer>
    )
}

Comment.propTypes = {
    comment : PropTypes.object.isRequired
}