'use client'

import { ChevronLeft, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavBarMenu from "./NavBarMenu";
import { useRouter } from "next/navigation";

const NavBarProducts = () => {
    const router = useRouter();

    return (
        <header className="
            relative
            w-full
            flex 
            flex-wrap
            items-center
            py-20
            
        ">
        {/* <div className="navBtn">
            <Link href='https://bivensblueprint.com'>
                <Image
                    src='/blueprint_logo.png'
                    alt='Blueprint Logo'
                    width={50}
                    height={50}
                />
            </Link>
        </div> */}
        
            <nav className="flex flex-row w-full justify-around mx-auto">

                <button type="button" className="navBtn" onClick={() => router.back()}>
                    <ChevronLeft />
                </button>
                
                <Link href='/'>
                    <button type="button" className="navBtn">
                        <Home />
                    </button>
                </Link>
                
                <NavBarMenu />
                
            </nav>

        </header>
    );
}

export default NavBarProducts;