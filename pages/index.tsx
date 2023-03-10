import Head from 'next/head'
import { Col, ColCentered } from '../components/base';
import 'twin.macro';
import Game from '../components/game';

const Home: React.FC<{users: any}> = ({ users }) => (
  <>
    <Head>
      <title>Connect Four</title>
      <meta charSet="utf-8"/>
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=yes, viewport-fit=cover"
      />
    </Head>
    <ColCentered tw="h-full">
      <Game/>
    </ColCentered>
  </>
)

export default Home