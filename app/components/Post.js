import React from 'react'
import { fetchItem, fetchComments } from '../utils/api'
import queryString from 'query-string'
import Loading from './Loading'
import PostInfo from './PostInfo'
import Comment from './Comment'

export default class Post extends React.Component {
    constructor (props) {
        super(props)

        this.state =  {
            post : null,
            loadingPost : true,
            comments: [],
            loadingComments: true,
            error : null
        }
    }

    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)

        fetchItem(id)
            .then((post) => {
                this.setState({ post, loadingPost: false })

                if (post.hasOwnProperty('kids')) {
                    return fetchComments(post.kids)
                }

                return []
            })
            .then((comments) => {
                this.setState({ comments, loadingComments : false })
            })
    }

    render() {
        const { error, comments ,loadingComments ,loadingPost, post } = this.state
        if (error) {
            return <p>{error}</p>
        }

        return (
            <React.Fragment>
                { loadingPost === true 
                    ?   <Loading text="Fetching Post"/>
                    : 
                        <React.Fragment>
                             <a className="post-link" href={post.url}>
                                {post.title}
                            </a>
                            <PostInfo user={post.by} time={post.time} id={post.id} comments={post.descendants}/>
                        </React.Fragment>
                }

                { loadingComments === true
                    ?   <Loading text="Fetching Comments"/>
                    :   
                        <React.Fragment>
                            {
                                comments.map((comment) => {
                                    return (
                                        <Comment key={comment.id} comment={comment}/>
                                    )
                                })
                            }
                        </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

