import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../store/index';
import { editComment, getPostCommentsFetch } from '../store/comments';
import { editUserUsername, getUsersFetch } from '../store/users';
import { Card, Container, Button, Accordion } from 'react-bootstrap';
import CommentsAccordionButton from '../components/CommentsAccordionButton';
import PostsList from '../components/PostsList';
import FilterInput from '../components/FilterInput';
import PaginationControls from '../components/PaginationControls';
import ControlsBar from '../components/ControlsBar';


  


function FeedPage() {

    console.log('FeedPage')

    return (
        <Container>
            <ControlsBar/>
            <PostsList></PostsList>
            <PaginationControls></PaginationControls>              
        </Container>
    )
}

export default FeedPage