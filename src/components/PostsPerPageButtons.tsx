import React from 'react'; 
import { Button, ButtonGroup } from 'react-bootstrap'; 
import { useDispatch } from 'react-redux'; 
import { perPageChange } from '../store/posts'; 

function PostsPerPageButtons() {
    const dispatch = useDispatch()

    const perPageChangeHandler = (perPage : number)   => {
        dispatch(perPageChange(perPage))
    }

    console.log('Sorting Dropdown')
    
    return (
        <ButtonGroup className="mb-2">
            <Button onClick={() => perPageChangeHandler(10)}>10</Button>
            <Button onClick={() => perPageChangeHandler(25)}>25</Button>
            <Button onClick={() => perPageChangeHandler(50)}>50</Button>
        </ButtonGroup>
    )
}

export default React.memo(PostsPerPageButtons)
