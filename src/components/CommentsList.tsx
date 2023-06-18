import React from 'react'; 
import { BlogComment } from '../store/comments';

type CommentsListProps = {
    comments: BlogComment[]
}

function CommentsList({comments} : CommentsListProps) {

    console.log('CommentsList')
    console.log(comments)

    return (
        <div className='comments-list_wrapper'>
            {comments.map((comment: BlogComment) =>
                <div key={comment.id}>{comment.body}</div>
            )}
        </div>

    )
}

export default React.memo(CommentsList)