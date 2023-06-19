import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { BlogPost } from '../store/posts';
import IconPlaceholder from '../assets/icon-placeholder.png';
import { Link } from 'react-router-dom';
import CommentsAccordion from './CommentsAccordion';

type PostCardProps = {
    post: BlogPost
}

function PostCard({post} : PostCardProps) {
    
    
    console.log(`Post ${post.id}`)

    return (
        <Card key={post.id}>
            <Card.Body>
                <Row>
                    <Col xs={1}>
                        <Link to={`/user/${post.userId}`}><Image src={IconPlaceholder} roundedCircle fluid/></Link>
                    </Col>
                    <Col>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <CommentsAccordion postId={post.id}/>
        </Card>
    )
}

export default React.memo(PostCard)