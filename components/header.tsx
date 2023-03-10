import Link from 'next/link';
import { Col, Row } from './base';
import 'twin.macro';

const Header: React.FC = () => {
    return (
        <Col tw="pt-4 pb-8 sm:py-20">
            <Row tw="justify-start items-center">
                <Col>
                    <Link href="/">
                        <p tw="font-bold text-4xl md:text-6xl font-mono drop-shadow-sm">Connect Four</p>
                    </Link>
                </Col>
            </Row>
        </Col>
    )
}

export default Header;


