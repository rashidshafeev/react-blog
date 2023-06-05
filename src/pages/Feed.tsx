import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../store/index';
import { editPost, getPostsFetch, BlogPost } from '../store/posts';
import { editComment, getPostCommentsFetch } from '../store/comments';
import { editUserUsername, getUsersFetch } from '../store/users';
import { Card, Container, Button } from 'react-bootstrap';

function FeedPage() {
    const posts = useSelector((state: RootState) => state.posts.posts);
    const users = useSelector((state: RootState) => state.users);
    const comments = useSelector((state: RootState) => state.comments);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsFetch())
        dispatch(getPostCommentsFetch({id: 3}))
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
        <Container>
            {posts.map((post: BlogPost) =>
                <Card key={post.id}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                        <Button variant="primary">Комментарии</Button>
                    </Card.Body>
                </Card>
            )}
        </Container>
    )
}

export default FeedPage