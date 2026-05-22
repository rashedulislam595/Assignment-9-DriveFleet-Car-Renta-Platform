'use client'
import { Avatar, Button, Dropdown, Label, Spinner } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import logo from '../../public/assets/logo.png'
import { authClient } from '@/lib/auth-client';
import { CiLogout, CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const isActive = usePathname()

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;


    const handleSignOut = async () => {
        await authClient.signOut()
        toast.success("Logout Successful!", {
            position: "top-center",
            theme: "dark"
        })
    }

    const navLinks = (
        <>
            <li>
                <Link
                    onClick={() => setOpen(false)}
                    href={'/'}
                    className={`${isActive === "/" ? "text-green-600 border-b-2 border-green-500" : ""}`}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    onClick={() => setOpen(false)}
                    href={'/explore-cars'}
                    className={`${isActive === "/explore-cars" ? "text-green-600 border-b-2 border-green-500" : ""}`}
                >
                    Explore Cars
                </Link>
            </li>

            <li>
                <Link
                    onClick={() => setOpen(false)}
                    href={'/add-car'}
                    className={`${isActive === "/add-car" ? "text-green-600 border-b-2 border-green-500" : ""}`}
                >
                    Add Car
                </Link>
            </li>

            <li>
                <Link
                    onClick={() => setOpen(false)}
                    href={'/my-bookings'}
                    className={`${isActive === "/my-bookings" ? "text-green-600 border-b-2 border-green-500" : ""}`}
                >
                    My Bookings
                </Link>
            </li>
        </>
    )

    return (
        <div className='bg-white shadow-sm sticky top-0 z-50'>
            <div className='w-11/12 mx-auto flex justify-between items-center py-3'>

                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <Image src={logo} alt='logo' width={45} height={45} />
                    <h2 className='text-2xl md:text-3xl font-bold'>
                        DriveFleet
                    </h2>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-6 items-center font-medium'>
                    {navLinks}
                </ul>

                {/* Right Side */}
                <div className='flex items-center gap-3'>

                    {
                        isPending ?
                            <Spinner /> :

                            <>
                                {
                                    user ?
                                        <Dropdown>
                                            <Button
                                                aria-label="Menu"
                                                variant=''
                                                className='rounded-full'
                                            >
                                                <Avatar>
                                                    <Avatar.Image
                                                        alt={user?.name}
                                                        src={user?.image}
                                                    />
                                                    <Avatar.Fallback>
                                                        {user?.name?.[0]}
                                                    </Avatar.Fallback>
                                                </Avatar>
                                            </Button>

                                            <Dropdown.Popover>
                                                <Dropdown.Menu>

                                                    <Dropdown.Item>
                                                        <Link
                                                            href={'/add-car'}
                                                            className='w-full'
                                                        >
                                                            <Label>Add Car</Label>
                                                        </Link>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item>
                                                        <Link
                                                            href={'/my-bookings'}
                                                            className='w-full'
                                                        >
                                                            <Label>My Bookings</Label>
                                                        </Link>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item>
                                                        <Link
                                                            href={'/my-added-car'}
                                                            className='w-full'
                                                        >
                                                            <Label>My Added Cars</Label>
                                                        </Link>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item>
                                                        <Button
                                                            onClick={handleSignOut}
                                                            variant='danger'
                                                            className='rounded-md w-full'
                                                        >
                                                            <CiLogout />
                                                            Logout
                                                        </Button>
                                                    </Dropdown.Item>

                                                </Dropdown.Menu>
                                            </Dropdown.Popover>
                                        </Dropdown>
                                        :
                                        <Link href={'/login'}>
                                            <Button
                                                variant='primary'
                                                className='rounded-md'
                                            >
                                                Login
                                            </Button>
                                        </Link>
                                }
                            </>
                    }

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className='md:hidden text-xl'
                    >
                        {
                            open ? <IoClose /> : <CiMenuFries />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${open ? " py-4" : "max-h-0"
                    }`}
            >
                <ul className='flex flex-col gap-5 px-6 font-medium'>
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;