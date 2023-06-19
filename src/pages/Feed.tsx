import { useEffect } from 'react';
import { Container } from 'react-bootstrap'; 
import PostsList from '../components/PostsList'; 
import PaginationControls from '../components/PaginationControls';
import ControlsBar from '../components/ControlsBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostsFetch, postCountUpdate } from '../store/posts';
import { RootState } from '../store/index';
import LoadingScreen from '../components/LoadingScreen';
import ErrorMessage from '../components/ErrorMessage';

function FeedPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPostsFetch())
    }, [dispatch])

    const posts = useSelector((state: RootState) => state.posts.posts);
    const loading = useSelector((state: RootState) => state.posts.isLoading);
    const error = useSelector((state: RootState) => state.posts.error);

    const filterValue = useSelector((state: RootState) => state.posts.filterValue);
    const sorting = useSelector((state: RootState) => state.posts.sorting);
    const currentPage = useSelector((state: RootState) => state.posts.currentPage);
    const perPage = useSelector((state: RootState) => state.posts.perPage);

    const filtered = posts.filter(post => {
        return post.title.includes(filterValue)
    })
    console.log(filtered)


    switch(sorting) {
        case 'A -> Z':
            filtered.sort((a, b) => {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return 1
                }
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return -1
                }
                return 0
            })
            break
        case 'Z -> A':
            filtered.sort((a, b) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1
                }
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1
                }
                return 0
            })
            break
        default:
            break
    }

    dispatch(postCountUpdate(filtered.length))
    

    const page = filtered.slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage)

    console.log('FeedPage')

    return (
        <Container>
            <ControlsBar/>
            {error && <ErrorMessage></ErrorMessage>}
            {loading && <LoadingScreen></LoadingScreen>}
            {!loading && !error &&
                <>
                    <PostsList posts={page}></PostsList>
            <PaginationControls></PaginationControls>   
                </>
            }
                       
        </Container>
    )
}

export default FeedPage