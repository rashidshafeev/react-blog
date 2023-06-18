import { Container } from 'react-bootstrap'; 
import PostsList from '../components/PostsList'; 
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