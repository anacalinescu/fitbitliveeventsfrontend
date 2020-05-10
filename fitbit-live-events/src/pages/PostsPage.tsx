import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/postsActions'
import { Post } from '../components/Posts'

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {  
    useEffect(() => {    
        dispatch(fetchEvents())
    }, [dispatch])

    const renderPosts = () => {    
        if (loading) return <p>Loading posts...</p>    
        if (hasErrors) return <p>Unable to display posts.</p>    
        return posts.map(post => <Post key={post.Id} post={post} />)
    }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = state => ({  
    loading: state.posts.loading,  
    posts: state.posts.posts,  
    hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)