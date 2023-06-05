import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

function MainLayout(props: PropsWithChildren ) {
    return (
        <Container fluid>
            {props.children}
        </Container>
    )
}

export default MainLayout