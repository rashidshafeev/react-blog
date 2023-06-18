import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/index';
import PostCard from './PostCard';
import { getPostsFetch, BlogPost, postCountUpdate } from '../store/posts';


function PostsList() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsFetch())
    }, [dispatch])

    const posts = useSelector((state: RootState) => state.posts.posts);
    const filterValue = useSelector((state: RootState) => state.posts.filterValue);
    const sorting = useSelector((state: RootState) => state.posts.sorting);
    const currentPage = useSelector((state: RootState) => state.posts.currentPage);
    const perPage = useSelector((state: RootState) => state.posts.perPage);
    // const posts = useSelector((state: RootState) => state.posts);

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

    console.log('PostsList')

    return (
        <div className='posts-list_wrapper'>
            {filtered.length > 0 && page.map((post: BlogPost) =>
                <PostCard key={post.id} post={post}></PostCard>
            )}
            {filtered.length === 0 && (<div>Нет записей удовлетворяющих условиям поиска</div>)}
        </div>

    )
}

export default PostsList