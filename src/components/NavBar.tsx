import { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { Navbar, Container, Offcanvas, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

function NavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">REACT BLOG</Navbar.Brand>
                    <Button variant="light" onClick={handleShow}>
                        <FiMenu />
                    </Button>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <NavLink to="/feed" onClick={(e) => {handleClose()}}>Лента</NavLink>
                        <NavLink to="/user" onClick={(e) => {handleClose()}}>Пользователь</NavLink>
                        <NavLink to="/about" onClick={(e) => {handleClose()}}>О себе</NavLink>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default NavBar