import { Button, Form, InputGroup } from 'react-bootstrap';
import { MdClear } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { filterChange } from '../store/posts';
function FilterInput() {
    const dispatch = useDispatch()

    const filterChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterChange(event.target.value))
    }


    console.log('Filter Input')

    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Поиск"
                aria-label="search"
                onChange={filterChangeHandler}
            />
            <Button variant="outline-secondary" id="clear-button">
                <MdClear/>
            </Button>
        </InputGroup>
        // <div className='filter-inut_wrapper'>
        //     <input onChange={filterChangeHandler}></input>
        // </div>
    )
}

export default FilterInput