import React from 'react'; 
import { BlogComment } from '../store/comments';
import Comment from './Comment';
import ErrorMessage from './ErrorMessage';
import LoadingScreen from './LoadingScreen';

type CommentsListProps = {
    comments: {
        comments:BlogComment[],
        isLoading: boolean,
        error: boolean
        } 
}

function CommentsList({comments} : CommentsListProps) {

    const loading = comments.isLoading;
    const postComments = comments.comments
    const error = comments.error

    console.log('CommentsList')
    console.log(comments)

    return (
        <div className='comments-list_wrapper'>
            {error && <ErrorMessage></ErrorMessage>}
            {loading && <LoadingScreen></LoadingScreen>}
            {!loading && postComments.map((comment: BlogComment) =>
                <Comment comment={comment}/>
            )}
        </div>

    )
}

export default React.memo(CommentsList)