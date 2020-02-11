import React from 'react'
import PostList from './PostList'
import { getPosts } from '../utils/api'
import Loading from './Loading'

export default class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts : null,
            error: null,
            isLoading: true
        }
        
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        this.fetchPosts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
          this.fetchPosts()
        }
      }

    fetchPosts() {
        this.setState({ 
            posts: null,
            error: null,
            isLoading: true
        })

        getPosts(this.props.type)
            .then((posts) => 
                this.setState({
                    posts,
                    error: null,
                    isLoading: false
                })
            )
            .catch(({ error }) => 
                this.setState({
                    posts: null,
                    error, 
                    isLoading: false
                })
            ); 
    }   

    render() {
        const { posts, error, isLoading } = this.state

        if (isLoading === true) {
            return <Loading/>
        }

        if (error) {
            return <p>{error}</p>
        }

        return (
            <PostList posts={posts} />
        )
    }
}