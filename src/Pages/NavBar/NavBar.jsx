import {
    Typography,
    Button,
} from "@material-tailwind/react";
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";

// logo
// https://i.ibb.co/JQSHhMc/elite-fashion.png
// https://i.ibb.co/X4fv3t5/elite-fashion2.png (2)

const NavBar = () => {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <NavLink to="/">
                    <Button fullWidth variant="text" size="sm" className="">
                        <span>Home</span>
                    </Button>
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <NavLink to="/add">
                    <Button fullWidth variant="text" size="sm" className="">
                        <span>Add Product</span>
                    </Button>
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >

                <NavLink to="/cart" >
                    <Button fullWidth variant="text" size="sm" className="">
                        <span>My Cart</span>
                    </Button>
                </NavLink>
            </Typography>

        </ul>
    );

    return (
        <div>

            <Navbar className="mx-auto max-w-screen-xl mt-8 px-4 py-2 lg:px-8 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    {/* <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Material Tailwind
                    </Typography> */}
                    <img className="w-[200px]" src="https://i.ibb.co/X4fv3t5/elite-fashion2.png" alt="" />
                    <div className="hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-x-1">
                        <NavLink to="/login">
                            <Button variant="text" size="sm" className="hidden lg:inline-block">
                                <span>Log In</span>
                            </Button>
                        </NavLink>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <div className="flex items-center gap-x-1">
                            <NavLink to="/login">
                                <Button fullWidth variant="text" size="sm" className="">
                                    <span>Log In</span>
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
};

export default NavBar;