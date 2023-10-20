import React from "react";
import {
    Navbar,
    MobileNav,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <NavLink to="/">
                <Button variant="gradient" className="rounded-full text-green-300">
                    Home
                </Button>
            </NavLink>
            <NavLink to="/add">
                <Button variant="gradient" className="rounded-full text-green-300">
                    Add Product
                </Button>
            </NavLink>
            <NavLink to="/cart" className="">
                <Button variant="gradient" className="rounded-full text-green-300">
                    My Cart
                </Button>
            </NavLink>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen px-4 py-2 lg:px-8 lg:py-4" >
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <img className="w-[200px]" src="https://i.ibb.co/X4fv3t5/elite-fashion2.png" alt="" />
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                    {/* <Button variant="text" size="sm" className="hidden lg:inline-block">
                        <NavLink to="/login">
                            <Button variant="gradient" className="rounded-full text-green-300">
                                Login
                            </Button>
                        </NavLink>
                    </Button> */}

                    {
                        user?
                    
                        <div className="flex flex-col mt-5 md:mt-0 lg:mt-0 md:flex-row lg:flex-row items-center ">
                            <div className="avatar mx-3 mt-2 md:mt-0 lg:mt-0">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <p className="mx-3 mt-2 md:mt-0 lg:mt-0">{user.displayName}</p>
                            
                            <Button onClick={handleLogout} variant="gradient" className="rounded-full text-green-300">
                                Log Out
                            </Button>
                        </div>
                        :
                        <Button variant="text" size="sm" className="hidden lg:inline-block">
                        <NavLink to="/login">
                            <Button variant="gradient" className="rounded-full text-green-300">
                                Login
                            </Button>
                        </NavLink>
                    </Button>
                    }
                    {console.log(user)}
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
                        <Button variant="gradient" size="sm" className="text-green-300">
                            <span>Log in</span>
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
};

export default NavBar;