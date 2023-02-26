import Image from "next/image";
import NavBarMenu from "./NavBarMenu";
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <header className="
            w-full
            flex 
            flex-wrap
            items-center
            justify-between
            py-12
            px-20
        ">

                <NavLink href='https://bivensblueprint.com'>
                    <Image
                        src='/blueprint_logo.png'
                        alt='Blueprint Logo'
                        width={50}
                        height={50}
                    />
                </NavLink>

                <nav className="hidden lg:flex flex-row mx-auto">
                    <a className="navBtn" href='/#About'>About Dreamers</a>

                    <a className="navBtn" href='/#OurServices'>Our Services</a>

                    <a className="navBtn" href='/#ViewOurWork'>View Our Work</a>

                    <a className="navBtn" href='/#ContactUs'>Contact Us</a>
                </nav>
            
                <NavBarMenu />
            
        

        </header>
    );
}

export default NavBar;