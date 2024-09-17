"use client"
import Game from "@/components/ui/Game";
import { useEffect, useMemo } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      const handleResize = () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <Container>
      <Game/>
    </Container>
  )
}

const Container = (props: {children: React.ReactNode}) => (
  <div
    className={`
      flex
      flex-col
      items-start
      justify-center
      h-full
      text-black
      dark:text-bone
    `}
  >
    {props.children}
  </div>
)

export default Home;