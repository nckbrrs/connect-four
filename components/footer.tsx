import { Col, Row  } from './base';
import 'twin.macro';

const Footer: React.FC = () => {
    return (
        <Col tw="pt-10 pb-2 sm:py-20">
            <Row tw="justify-end items-center">
                <p tw="font-mono text-xs font-light opacity-60 dark:opacity-30">
                    made with ❤️ by&nbsp; 
                    <a href="https://www.nickbarrs.com" target="_blank" rel="noopener noreferrer" tw="duration-100 hover:font-medium hover:text-black dark:hover:text-white">
                        Nick Barrs
                    </a>
                </p>
            </Row>
        </Col>
    )
}

export default Footer;


