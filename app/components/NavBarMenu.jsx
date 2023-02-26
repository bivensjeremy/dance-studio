'use client'
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const navBarMenuTags = [
    {
        id: 1,
        name: 'Dance',
        url: '/Dance'
    },
    {
        id: 2,
        name: 'Model',
        url: '/Model'
    },
    {
        id: 3,
        name: 'Photography',
        url: '/Photography'
    },
    {
        id: 4,
        name: 'Policies',
        url: '/policies'
    },
    {
        id: 5,
        name: 'Enrollment Application',
        url: '/enrollment'
    },
]

const NavBarMenu = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="navBtn">
                    <Menu />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                    {navBarMenuTags.map((item) => (
                        <Link
                            key={item.id}
                            href={`/products${item.url}`} 
                            className='hover:text-[#F73D93] focus:text-[#F73D93] transition duration-150 ease-in-out'>
                            <DropdownMenu.Item className="DropdownMenuItem">
                                {item.name}
                            </DropdownMenu.Item>
                        </Link>
                    ))}
                    <DropdownMenu.Arrow className="fill-white" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default NavBarMenu;