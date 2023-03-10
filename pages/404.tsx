import Link from "next/link";
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from 'next/router';
import Head from "next/head";
import { ColCentered } from "../components/base";
import 'twin.macro';

const NotFound: React.FC = () => {
  const router: NextRouter = useRouter();
  const [secondsOnPage, setSecondsOnPage] = useState<number>(0);
  const secondsToWaitBeforeRerouting: number = 5;

  useEffect(() => {
    setTimeout(() => {
      setSecondsOnPage(secondsOnPage + 1)
    }, 1000)
    
    if (secondsOnPage >= secondsToWaitBeforeRerouting) {
      router.push('/')
    }
  }, [secondsOnPage])
  
  return (
    <>
      <Head>
        <title>Connect Four / 404</title>
          <meta charSet="utf-8"/>
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=yes, viewport-fit=cover"
          />
      </Head>
      <ColCentered tw="h-full">
        <h1>Oops!</h1>
        <p>In {secondsToWaitBeforeRerouting - secondsOnPage} seconds, you will be navigated to the <Link href="/">home page.</Link></p>
      </ColCentered>
    </>
  )
}

export default NotFound;