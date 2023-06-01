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
                        <NavLink to="/feed">Лента</NavLink>
                        <NavLink to="/user">Пользователь</NavLink>
                        <NavLink to="/about">О себе</NavLink>
                        {/* <Nav.Link href="/home">Active</Nav.Link>
<Nav.Link eventKey="link-1">Link</Nav.Link>
<Nav.Link eventKey="link-2">Link</Nav.Link>
<Nav.Link eventKey="disabled" disabled>
Disabled
</Nav.Link> */}
                    </Nav>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default NavBar