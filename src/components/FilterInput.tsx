import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { MdClear } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { filterChange } from '../store/posts';

function FilterInput() {
    
    const [filterValue, setfilterValue] = useState('')
    const dispatch = useDispatch()

    const filterChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setfilterValue(event.target.value)
        dispatch(filterChange(event.target.value))
    }

    const clearFilterHandler = () => {
        setfilterValue('')
        dispatch(filterChange(''))
    }


    console.log('Filter Input')

    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Поиск"
                aria-label="search"
                value={filterValue}
                onChange={filterChangeHandler}
            />
            <Button onClick={clearFilterHandler} variant="outline-secondary" id="clear-button">
                <MdClear/>
            </Button>
        </InputGroup>
        // <div className='filter-inut_wrapper'>
        //     <input onChange={filterChangeHandler}></input>
        // </div>
    )
}

export default FilterInput