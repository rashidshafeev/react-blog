import { useContext } from 'react'
import { AccordionContext, Button, useAccordionButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getPostCommentsFetch } from '../store/comments';

function CommentsAccordionButton({ children, eventKey, callback, postId } :any) {
    const dispatch = useDispatch()

    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => {
        // callback && callback(eventKey)
        if (!isCurrentEventKey) {
          dispatch(getPostCommentsFetch({id: postId}))
        }
      }
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
        <Button variant="primary" style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }} onClick={decoratedOnClick}>Go somewhere</Button>
    );
  }


  export default CommentsAccordionButton