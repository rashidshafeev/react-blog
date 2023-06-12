import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../store/index';
import { editComment, getPostCommentsFetch } from '../store/comments';
import { editUserUsername, getUsersFetch } from '../store/users';
import { Card, Container, Button, Accordion } from 'react-bootstrap';
import CommentsAccordionButton from '../components/CommentsAccordionButton';
import PostsList from '../components/PostsList';
import FilterInput from '../components/FilterInput';


  


function FeedPage() {

    console.log('FeedPage')

    return (
        <Container>
            <FilterInput></FilterInput>
            <PostsList></PostsList>
        </Container>
    )
}

export default FeedPage