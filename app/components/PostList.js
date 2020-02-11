import React from 'react'
import Post from './Post'
import PropType from 'prop-types'

export default function PostList({ posts }) {
    return (
        <ul>
            {posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        link={post.url}
                        time={post.time}
                        title={post.title}
                        user={post.by}
                        comments={post.descendants}
                    />
                )
            })}
        </ul>
    )
}

PostList.propTypes = {
    posts : PropType.array.isRequired
}