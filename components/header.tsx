import { Col, Row } from './base';
import 'twin.macro';

const Header: React.FC = () => {
    return (
        <Col tw="pt-10 pb-4 sm:py-20">
            <Row tw="justify-between items-center">
                <p>header left element</p>
                <p>header right element</p>
            </Row>
        </Col>
    )
}

export default Header;


