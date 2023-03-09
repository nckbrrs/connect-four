import Head from 'next/head'
import { Col } from '../components/base';
import 'twin.macro';

const Home: React.FC<{users: any}> = ({ users }) => (
  <>
    <Head>
      <title>TITLE / Home</title>
      <meta charSet="utf-8"/>
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=yes, viewport-fit=cover"
      />
    </Head>
    <Col tw="h-full justify-center items-center">
      <p>content</p>
    </Col>
  </>
)

export default Home