import { Col, Row  } from './base';
import 'twin.macro';


const Footer: React.FC = () => {
    return (
        <Col tw="pt-10 pb-4 sm:py-20">
            <Row tw="justify-between items-center">
                <p>footer left element</p>
                <p>footer right element</p>
            </Row>
        </Col>
    )
}

export default Footer;


