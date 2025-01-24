import React from "react";

const Footer: React.FC = () => (
    <Container>
        <FooterText>
            made with&nbsp;❤️&nbsp;by&nbsp;
        </FooterText>
        <NickBarrsLink href="https://nickbarrs.com/" target="_blank" rel="noopener noreferrer">
            Nick Barrs
        </NickBarrsLink>
    </Container>
)

const Container = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-row
            w-full
            pb-4 sm:pb-10 md:pb-12 lg:pb-20
            pt-12
            justify-end
            items-center
            text-[0.75em]
            tracking-wide
            text-black
            dark:text-bone
            [&>*]:opacity-30
        `}
    >
        {props.children}
    </div>
)


const FooterText = (props: {children: React.ReactNode}) => (
    <p>
        {props.children}
    </p>
)

const NickBarrsLink = (props: {children: React.ReactNode, href: string, target: string, rel: string}) => (
    <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={`
            hover:opacity-80 
            hover:cursor-pointer
            duration-100
        `}
    >
        {props.children}
    </a>
)

export default Footer;