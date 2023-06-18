import React from 'react';
import { Card, Accordion, Row, Col, Image } from 'react-bootstrap';
import CommentsAccordionButton from './CommentsAccordionButton';
import { BlogPost } from '../store/posts';
import CommentsList from './CommentsList';
import { RootState } from '../store/index';
import { useSelector } from 'react-redux';
import IconPlaceholder from '../assets/icon-placeholder.png';
import { Link } from 'react-router-dom';

type PostCardProps = {
    post: BlogPost
}

function PostCard({post} : PostCardProps) {
    const comments = useSelector((state: RootState) => state.comments.comments[post.id]);
    
    console.log(`Post ${post.id}`)

    return (
        <Card key={post.id}>
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <Link to={`user/${post.userId}`}><Image src={IconPlaceholder} roundedCircle fluid/></Link>
                    </Col>
                    <Col>
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
                    </Col>

                </Row>
            </Card.Body>
        </Card>
    )
}

export default React.memo(PostCard)