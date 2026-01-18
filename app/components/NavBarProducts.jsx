'use client'

import { ChevronLeft, Home } from "lucide-react";
import Link from "next/link";
import NavBarMenu from "./NavBarMenu";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { Label } from "@heroui/react";

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
            <nav className="flex flex-row w-full justify-around mx-auto">
                <Button isIconOnly variant="ghost" size="lg" onClick={() => router.back()}>
                    <ChevronLeft className="w-8 h-8 text-accent" />
                </Button>
                
                <Link href='/' className="flex flex-col text-center">
                    <Button isIconOnly type="button" size="lg" variant='ghost'>
                        <Home className="w-8 h-8 text-accent" />
                    </Button>
                    {/* <Label className="text-accent">Home</Label> */}
                </Link>
                
                <NavBarMenu />
                
            </nav>
        </header>
    );
}

export default NavBarProducts;