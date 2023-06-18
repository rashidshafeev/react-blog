import React from 'react'; 
import { Button } from 'react-bootstrap'; 
import { useDispatch } from 'react-redux'; 
import { switchPage } from '../store/posts';

type PaginationButtonProps = {
    current: boolean,
    page: number
}

function PaginationButton({current, page} : PaginationButtonProps) {
    const dispatch = useDispatch()

    const switchPageHandler = () => {
        dispatch(switchPage(page))
    }

    console.log('Pagination Button')
    console.log(current, page)

    if (current) {
        return (
            <Button variant="info" onClick={switchPageHandler}>{page} </Button>
        )
    } else {
        return (
            <Button onClick={switchPageHandler}>{page} </Button>
        )
    }
}

export default React.memo(PaginationButton)
