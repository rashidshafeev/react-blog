import { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { Navbar, Container, Offcanvas, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

function FilterInput() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='filter-inut_wrapper'>
            <input></input>
        </div>
    )
}

export default FilterInput