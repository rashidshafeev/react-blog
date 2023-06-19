import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPostCommentsFetch } from '../store/comments'
import CommentsList from './CommentsList'
import { RootState } from '../store/index';

type CommentsAccordionProps = {
    postId: number
}

function CommentsAccordion({postId} : CommentsAccordionProps) {


    const dispatch = useDispatch()
    const accordionButtonHandler = () => {
        dispatch(getPostCommentsFetch(postId))
    }

    
    const comments = useSelector((state: RootState) => state.comments.comments[postId]);

    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header onClick={accordionButtonHandler}>Комментарии</Accordion.Header>
                <Accordion.Body>
                    {comments && <CommentsList comments={comments}></CommentsList>}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default CommentsAccordion