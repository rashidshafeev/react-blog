import React from 'react'
import { BlogComment } from '../store/comments'

type CommentProps = {
    comment: BlogComment
}

function Comment({comment} : CommentProps) {
  return (
    <div key={comment.id}>{comment.body}</div>
  )
}

export default Comment