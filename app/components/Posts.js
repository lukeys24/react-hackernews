import React from 'react'
import Post from './Post'

function PostList() {
    return (
        <div className="post-container">
            <ul className="post-list">
                <li>
                    <Post/>
                </li>
                <li>
                    <Post/>
                </li>
                <li>
                    <Post/>
                </li>
                <li>
                    <Post/>
                </li>
            </ul>
        </div>
    )
}

export default class Posts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <PostList/>
            </React.Fragment>
        )
    }
}