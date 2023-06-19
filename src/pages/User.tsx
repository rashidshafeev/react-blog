import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserFetch, BlogUser } from "../store/users";
import { RootState } from '../store/index';
import { useEffect } from "react";
import PostsList from "../components/PostsList";
import { getUserPostsFetch, BlogPost } from "../store/posts";
import { Container } from "react-bootstrap";
import UserInfo from "../components/UserInfo";
import LoadingScreen from "../components/LoadingScreen";
import ErrorMessage from "../components/ErrorMessage";

function UserPage() {
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserFetch(Number(params.userId)))
        dispatch(getUserPostsFetch(Number(params.userId)))
    }, [dispatch, params.userId])

    let userId : string
    if (params.userId) {
        userId = params.userId
    }

    const user : BlogUser = useSelector((state: RootState) => state.users.users[userId]);
    const userLoading : boolean = useSelector((state: RootState) => state.users.isLoading);
    const error : boolean = useSelector((state: RootState) => state.users.error);

    const posts : BlogPost[] = useSelector((state: RootState) => state.posts.posts);
    const postsLoading : boolean = useSelector((state: RootState) => state.posts.isLoading);

    const loading = userLoading && postsLoading
    
    const userPosts = posts.filter(post => {
        return post.userId === Number(userId)
    })

    return (
        <Container>
            {error && <ErrorMessage/>}
            {loading && <LoadingScreen />}
            {!loading && user &&
                <>
                    <UserInfo user={user}></UserInfo>
                    <PostsList posts={userPosts} />
                </>
            }
        </Container>
    )
}

export default UserPage