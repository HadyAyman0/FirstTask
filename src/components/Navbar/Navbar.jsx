import React from "react";
import img1 from '../../assets/Travel-agency-logo-design-template-on-transparent-background-PNG.png'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#Blog" className="flex items-center hover:text-blue-500 transition-colors">
                    Blog
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#Contactus" className="flex items-center hover:text-blue-500 transition-colors">
                    Contact Us
                </a>
            </Typography>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="fixed bg-white shadow-none  top-0 z-[999999] h-max max-w-full border-none block rounded-none px-4 py-3 lg:px-8 lg:py-4">
            <div className="container">
                <div className="flex items-center gap-10 text-blue-gray-900">
                    <Typography
                        as="li"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5"
                    >
                      <div className="flex gap-3 items-center">
                      <img src={img1} className="w-[50px]" alt="logo" />
                      <h1 className="font-extrabold text-3xl"> <span className="text-red-600">H</span> Travel</h1>
                      </div>
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </div>
        </Navbar>
    );
}