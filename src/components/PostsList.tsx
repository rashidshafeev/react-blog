import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/index';
import PostCard from './PostCard';
import { editPost, getPostsFetch, BlogPost } from '../store/posts';


function PostsList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsFetch())
    //     dispatch(getPostCommentsFetch({id: 3}))
    //     dispatch(getUsersFetch())
    //     dispatch(editPost({id: 1, body: 'testPost'}))
    //     dispatch(editComment({id: 1, body: 'testComment'}))
    //     dispatch(editUserUsername({id: 1, username: 'testUsername'}))
    }, [dispatch])
    const posts = useSelector((state: RootState) => state.posts.posts);

    console.log('PostsList')

    return (
        <div className='posts-list_wrapper'>
            {posts.map((post: BlogPost) =>
                <PostCard key={post.id} post={post}></PostCard>
            )}
        </div>

    )
}

export default PostsList