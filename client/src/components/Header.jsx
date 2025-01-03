
import {
    Avatar,
    DarkThemeToggle,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
  } from "flowbite-react";
import { Link } from "react-router-dom";

  export function Header() {
    return (
      <Navbar className="" fluid>
        <NavbarBrand href="">
          <img src="" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BESTRO BOSS</span>
        </NavbarBrand>
        <div className="flex md:order-2">
        <DarkThemeToggle />
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          
          <Link to={'/'}><NavbarLink>Home</NavbarLink></Link>
          <Link to={'/menu'}><NavbarLink >Our Menu</NavbarLink></Link>
          <Link to={`/order/salad`}><NavbarLink >Food Order</NavbarLink></Link>
    
        </NavbarCollapse>
      </Navbar>
    );
  }
  