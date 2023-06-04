import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../store/index';
import { editPost, getPostsFetch } from '../store/posts';
import { editComment, getCommentsFetch } from '../store/comments';
import { editUserUsername, getUsersFetch } from '../store/users';

function FeedPage() {
    const posts = useSelector((state: RootState) => state.posts.posts);
    const users = useSelector((state: RootState) => state.users);
    const comments = useSelector((state: RootState) => state.comments);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsFetch())
        dispatch(getCommentsFetch())
        dispatch(getUsersFetch())
        dispatch(editPost({id: 1, body: 'testPost'}))
        dispatch(editComment({id: 1, body: 'testComment'}))
        dispatch(editUserUsername({id: 1, username: 'testUsername'}))
    }, [dispatch])
    
    console.log('posts')
    console.log(posts)
    console.log('comments')
    console.log(comments)
    console.log('users')
    console.log(users)

    return (
        <h1>Feed</h1>
    )
}

export default FeedPage