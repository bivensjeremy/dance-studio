import { Button, Dropdown } from "@heroui/react";
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
    <Dropdown>
      <Button aria-label="Menu" isIconOnly variant="ghost" size="lg">
        <Menu className="w-8 h-8 text-accent"/>
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu>
          {navBarMenuTags.map(({ name, url }, idx) => (
                <Dropdown.Item as={Link} key={idx} className="font-semibold hover:text-accent focus:text-accent" href={`/products${url}`}>
                  {name}
              </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
    );
};

export default NavBarMenu;