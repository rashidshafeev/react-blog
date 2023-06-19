import PostCard from './PostCard';
import { BlogPost } from '../store/posts';

type PostsListProps = {
    posts: BlogPost[],
}


function PostsList({posts} : PostsListProps)   {    

    console.log('PostsList')

    return (
        <div className='posts-list_wrapper'>
            {posts.length > 0 && posts.map((post: BlogPost) =>
                <PostCard key={post.id} post={post}></PostCard>
            )}
            {posts.length === 0 && (<div>Нет записей удовлетворяющих условиям поиска</div>)}
        </div>

    )
}

export default PostsList