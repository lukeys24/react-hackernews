import React from 'react'
import PostInfo from './PostInfo'
import PropType from 'prop-types'

export default function PostList({ posts }) {
    return (
        <ul>
            {posts.map((post) => {
                return (
                    <div key={post.id} className="post">
                        <a className="link" href={post.url}>
                            {post.title}
                        </a>
                        <PostInfo user={post.by} time={post.time} id={post.id} comments={post.descendants}/>
                    </div>
                )
            })}
        </ul>
    )
}

PostList.propTypes = {
    posts : PropType.array.isRequired
}