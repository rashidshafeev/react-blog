import React, { useState } from 'react';
import { Card, Container, Button, Accordion } from 'react-bootstrap';
import CommentsAccordionButton from './CommentsAccordionButton';
import { editPost, getPostsFetch, BlogPost } from '../store/posts';
import CommentsList from './CommentsList';
import { RootState } from '../store/index';
import { useSelector } from 'react-redux';

type PostCardProps = {
    post: BlogPost
}

function PostCard({post} : PostCardProps) {
    const comments = useSelector((state: RootState) => state.comments.comments[post.id]);
    
    console.log(`Post ${post.id}`)

    return (
        <Card key={post.id}>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
                <Accordion>
                    <CommentsAccordionButton postId={post.id} eventKey="1">Click me!</CommentsAccordionButton>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='test'>
                            {comments && <CommentsList comments={comments}></CommentsList>}
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>

            </Card.Body>
        </Card>
    )
}

export default React.memo(PostCard)