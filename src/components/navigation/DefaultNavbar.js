import React from 'react';
import { useState } from 'react';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import { Link } from 'react-router-dom';
import icon from '../../../public/img/logo.jpeg'

const DefaultNavbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar navbar >
            <NavbarContainer >
                <NavbarWrapper>
                    <Link to="/" className="text-white p-2 text-center justify-center flex">
                        <img
                            alt=""
                            src={icon}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                        online ticketing
                    </Link>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="z-50 flex flex-col lg:flex-row lg:items-center">

                            <NavLink
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <p className="text-sm hover:text-green-300">Home</p>
                            </NavLink>
                            <NavLink
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <p className="text-sm hover:text-green-300">Event</p>
                            </NavLink>

                            <NavLink
                                href="/event"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <p className="text-sm hover:text-green-300">contact us</p>
                            </NavLink>
                            <NavLink
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <p className="text-sm hover:text-green-300">login</p>
                            </NavLink>

                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
export default DefaultNavbar;