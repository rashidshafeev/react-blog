import React, { useState } from 'react'; 
import { DropdownButton } from 'react-bootstrap'; 
import { useDispatch } from 'react-redux'; 
import { sortingChange } from '../store/posts';
import Dropdown from 'react-bootstrap/Dropdown';

function SortingDropdown() {
    const [sorting, setSorting] = useState('A -> Z')
    const dispatch = useDispatch()

    const sortingChangeHandler = (sortingValue : string)   => {
        setSorting(sortingValue)
        dispatch(sortingChange(sortingValue))
    }

    console.log('Sorting Dropdown')
    
    return (
        <DropdownButton id="dropdown-basic-button" title={sorting}>
            <Dropdown.Item onClick={() => sortingChangeHandler("A -> Z")}>A -&gt; Z</Dropdown.Item>
            <Dropdown.Item onClick={() => sortingChangeHandler("Z -> A")}>Z -&gt; A</Dropdown.Item>
        </DropdownButton>
    )
}

export default React.memo(SortingDropdown)
