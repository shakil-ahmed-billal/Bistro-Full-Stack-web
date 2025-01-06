
// react icons
import { Book, BookIcon, Calendar, ChartBarBigIcon, Contact, FilePlus, Home, Menu, ShoppingBag, Star, User } from "lucide-react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { GoHome, GoSidebarCollapse } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { RiAccountCircleLine, RiSecurePaymentFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
const Sidebar = () => {

    const [isCollapse, setIsCollapse] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState(true)
    const { user } = useAuth()

    // TODO : get Admin value form the database
    const isAdmin = true;


    return (
        <aside className={`${isCollapse ? 'w-44' : 'w-20'} bg-white boxShadow rounded-md transition-all duration-300 ease`}>
            <div className={`mt-5 ${isCollapse ? "px-[20px]" : "px-[10px]"} transition-all duration-300 ease-in-out`}>
                {
                    isCollapse ? (
                        <div className="flex items-center justify-between">
                            <img src="https://i.ibb.co/ZHYQ04D/footer-logo.png" alt="logo"
                                className="w-[130px] cursor-pointer" />
                            <div className="relative group">
                                <GoSidebarCollapse className="text-[1.5rem] text-gray-600 cursor-pointer"
                                    onClick={() => setIsCollapse(false)} />

                                {/* tooltip */}
                                <div
                                    className={`absolute -top-1 right-[-115px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                    <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                        Collapse
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo"
                            className="w-[50px] mx-auto cursor-pointer"
                            onClick={() => setIsCollapse(!isCollapse)} />
                    )
                }

                {/* search bar */}
                {
                    isCollapse ? (
                        <div className="relative mt-5">
                            <input
                                className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
                                placeholder="Search..." />
                            <IoIosSearch
                                className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
                        </div>
                    ) : (
                        <div className="w-full relative group">
                            <IoIosSearch
                                className="text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full" />

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Search
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* general section */}
            <div className={`mt-6 ${isCollapse ? "px-[20px]" : "px-[10px]"} transition-all duration-300 ease-in-out`}>

                {/* Admin or user navLink section */}
                <div className="mt-3 flex flex-col gap-[5px]">
                    {isAdmin ? <>
                        <NavLink to={'/dashboard/adminHome'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <GoHome className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Admin Home</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Admin Home
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/dashboard/addItem'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <FilePlus className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Add Item</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Add Item
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/dashboard/manageItem'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <ChartBarBigIcon className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Manage Item</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Manage Item
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/dashboard/manageBooking'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <Book className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Manage Booking</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Manage Booking
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/dashboard/addUsers'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <User className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Add Users</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Add Users
                                </p>
                            </div>
                        </NavLink>
                    </> : <>
                        <NavLink to={'/dashboard/userHome'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <User className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>User Home</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    User Home
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/dashboard/reservation'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <Calendar className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Reservation</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Reservation
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/dashboard/paymentHistory'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <RiSecurePaymentFill className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Payment History</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Payment History
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/dashboard/cart'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <User className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>My Cart</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    My Cart
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/dashboard/addReview'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <Star className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Add Users</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Add Users
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to={'/dashboard/myBooking'}
                            className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                            <div className="flex items-center gap-[8px]">
                                <BookIcon className="text-[1.3rem] text-gray-500" />
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>My Booking</p>
                            </div>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    My Booking
                                </p>
                            </div>
                        </NavLink>

                    </>}

                </div>
            </div>

            {/* setting section */}
            <div
                className={`${isCollapse ? "px-[20px]" : "px-[10px]"} mt-6 border-t border-gray-200  transition-all duration-300 ease-in-out`}>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <Home className="text-[1.3rem] text-gray-500" />
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Home</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-98px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Home
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <Menu className="text-[1.3rem] text-gray-500" />
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Menu</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-96px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Menu
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <ShoppingBag className="text-[1.3rem] text-gray-500" />
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Shop</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-96px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Shop
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <Contact className="text-[1.3rem] text-gray-500" />
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Contact</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-96px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Contact
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* profile section */}
            <div
                className={`${isCollapse ? "justify-between" : "justify-center"} bg-gray-100 py-3 px-[20px] flex items-center mt-10`}>
                <div className="flex items-center gap-[10px]">
                    <img referrerPolicy="no-referrer"
                        src={user?.photoURL}
                        alt="avatar" className="w-[30px] h-[30px] cursor-pointer rounded-full object-cover" />
                    <h3 className={`${isCollapse ? "inline" : "hidden"} text-[0.9rem] text-gray-800 font-[500]`}>{user?.displayName}</h3>
                </div>

                <div className={`${isCollapse ? "inline" : "hidden"} relative group`}>
                    <BsThreeDots className="text-[1.2rem] text-gray-500 cursor-pointer" />

                    <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[30px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px]">
                        <li className="flex items-center gap-[7px] text-[0.9rem] text-gray-600 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
                            <RiAccountCircleLine />
                            Profile
                        </li>
                        <li className="flex items-center gap-[7px] text-[0.9rem] text-red-500 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
                            <CiLogout />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

