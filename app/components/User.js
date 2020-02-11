import React from 'react'
import queryString from 'query-string' ;
import Loading from './Loading'
import { fetchUser, fetchPosts } from '../utils/api'
import { formatDate } from '../utils//helper'
import PostList from './PostList';

export default class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user : null,
            userLoading: true,
            posts : null,
            postLoading: true,
            error : null
        }
    }

    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)

        fetchUser(id)
            .then((user) => {
                this.setState({
                    user,
                    userLoading: false
                })
                
                return fetchPosts(user.submitted.slice(0, 50))
            })
            .then((posts) => {
                this.setState({
                    posts, 
                    postLoading: false, 
                    error : null
                })
            })
            .catch(({ message }) => {
                this.setState({
                    error : message, 
                    userLoading : false, 
                    postLoading : false
                })
            })
    }

    render() {
        const { user, userLoading, posts, postLoading, error } = this.state

        if (error) {
            return <p>{error}</p>
        }

        return (
            <React.Fragment>
                {userLoading === true
                    ?   <Loading text="Loading User Info"/>
                    :   
                        <React.Fragment>
                            <h1 className="name-title">{user.id}</h1>
                            <div className="info">
                                <span>joined <b>{formatDate(user.created)}</b></span>
                                <span>has <b>{user.karma.toLocaleString()}</b></span>
                            </div>
                            <p dangerouslySetInnerHTML={{__html : user.about}}></p>
                        </React.Fragment>
                }

                {postLoading === true
                    ?   <Loading text="Loading User Posts"/>
                    :   <React.Fragment>
                            <h2>Posts</h2>
                            <PostList posts={posts}/>
                        </React.Fragment>
                    
                }
            </React.Fragment>
        )
    }
}