import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/index';
import PostCard from './PostCard';
import { editPost, getPostsFetch, BlogPost } from '../store/posts';
import { getPostCommentsFetch, BlogComment } from '../store/comments';

type CommentsListProps = {
    comments: BlogComment[]
}

function CommentsList({comments} : CommentsListProps) {

    console.log('CommentsList')
    console.log(comments)

    return (
        <div className='comments-list_wrapper'>
            {comments.map((comment: BlogComment) =>
                <div>{comment.body}</div>
            )}
        </div>

    )
}

export default React.memo(CommentsList)