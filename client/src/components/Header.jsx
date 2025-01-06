
import {
  Button,
  DarkThemeToggle,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ShoppingCart } from "lucide-react";
import useCart from "../hooks/useCart";

export function Header() {

  const {user , LogOutUser} = useAuth()
  const [cart] = useCart()
  console.log(cart)


  return (
    <Navbar className="fixed top-0 w-full z-50" fluid>
      <NavbarBrand href="">
        <img src="" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BESTRO BOSS</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        
        <DarkThemeToggle />
        {user? <Dropdown
          arrowIcon={false}
          inline
          label={
            <img referrerPolicy="no-referrer" className="w-10 h-10 rounded-full" src={user?.photoURL}></img>
          }
        >
          <DropdownHeader>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">{user?.email}</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem onClick={LogOutUser}>Sign out</DropdownItem>
        </Dropdown>: <Link to={'/login'}><Button>Login</Button></Link>}
        <NavbarToggle />
      </div>
      <NavbarCollapse>

        <Link to={'/'}><NavbarLink>Home</NavbarLink></Link>
        <Link to={'/menu'}><NavbarLink >Our Menu</NavbarLink></Link>
        <Link to={`/order/salad`}><NavbarLink >Food Order</NavbarLink></Link>
        <Link to='/dashboard/cart'>
          <NavbarLink className="flex items-center gap-2 "><ShoppingCart></ShoppingCart>{cart?.length}</NavbarLink>
        </Link>

      </NavbarCollapse>
    </Navbar>
  );
}
