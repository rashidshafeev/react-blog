import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../store/index';
import { editPost } from '../store/posts';
import { editComment } from '../store/comments';
import { editUserUsername } from '../store/users';

function FeedPage() {
    const posts = useSelector((state: RootState) => state.posts);
    const users = useSelector((state: RootState) => state.users);
    const comments = useSelector((state: RootState) => state.comments);
    const dispatch = useDispatch()

    dispatch(editPost({id: 1, body: 'testPost'}))
    dispatch(editComment({id: 1, body: 'testComment'}))
    dispatch(editUserUsername({id: 1, username: 'testUsername'}))

    console.log(posts)
    console.log(comments)
    console.log(users)
    return (
        <h1>Feed</h1>
    )
}

export default FeedPage