import FilterInput from './FilterInput';
import SortingDropdown from './SortingDropdown';
import PostsPerPageButtons from './PostsPerPageButtons';
import { Col, Row } from 'react-bootstrap';

function ControlsBar() {

    return (
        <Row>
            <Col xs={3}>
                <FilterInput />
            </Col>
            <Col>
                <SortingDropdown />
            </Col>
            <Col>
                <PostsPerPageButtons />
            </Col>
        </Row>
    )
}

export default ControlsBar