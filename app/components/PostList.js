import React from 'react'
import Post from './Post'
import PropType from 'prop-types'
import { fetchComments } from '../utils/api'

export default function PostList({ posts }) {
    return (
        <ul>
            {posts.map((post) => {
                console.log(post);

                return (
                    <Post
                        key={post.id}
                        link={post.url}
                        time={post.time}
                        title={post.title}
                        user={post.by}
                        comments={post.descendants}
                    >

                    </Post>
                )
            })}
        </ul>
    )
}

PostList.propTypes = {
    posts : PropType.array.isRequired
}