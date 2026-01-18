'use client'
import NavBarMenu from "./NavBarMenu";
import { ButtonGroup } from "@heroui/react";
import Link from 'next/link'

const NavBarContent = [
    {
        href: "#About",
        title: "About Dreamers"
    },
    {
        href: "#OurServices",
        title: "Our Services",
    },
    {
        href: "#ViewOurWork",
        title: "View Our Work",
    },
    {
        href: "#ContactUs",
        title: "Contact Us"
    }
]

const NavBar = () => {
    return (
        <header className="
            w-full
            flex 
            flex-wrap
            items-center
            justify-between
            py-12
            px-6
            md:px-20
        ">
            <nav className="hidden lg:flex flex-row mx-auto">
                <ButtonGroup variant="secondary">
                {NavBarContent.map(({ href, title }, idx) => (
                    <Link key={idx} className="button button--secondary px-6" href={href}>
                        {title}
                    </Link>
                ))}
                </ButtonGroup>
            </nav>

            <NavBarMenu />
        </header>
    );
}

export default NavBar;