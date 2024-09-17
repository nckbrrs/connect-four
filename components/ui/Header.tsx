import Link from "next/link";

const Header = () => (
    <Container>
        <HeaderText>Connect Four</HeaderText>
    </Container>
)

export default Header;

const Container = (props: {children: React.ReactNode}) => (
    <div 
        className={`
            flex
            flex-col
            w-full
            pt-4
            pb-8
            sm:py-20
            justify-start
            items-start
        `}
    >
        {props.children}
    </div>
)

const HeaderText = (props: {children: string}) => (
    <p
        className={`
            font-bold
            text-4xl md:text-6xl
            font-mono
            drop-shadow-sm
        `}
    >
        {props.children}
    </p>
)