'use client'
import { Avatar, Button, Dropdown, Label, Spinner } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import logo from '../../public/assets/logo.png'
import { authClient } from '@/lib/auth-client';
import { CiLogout } from 'react-icons/ci';
import { toast } from 'react-toastify';

const Navbar = () => {
    const isActive = usePathname()

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;


    const handleSignOut = async () => {
        await authClient.signOut()
        toast.success("Logout Successful!", { position: "top-center", theme: "dark" })
    }

    return (
        <div className='bg-white shadow-sm sticky top-0 z-10'>
            <div className='flex justify-between items-center w-11/12 mx-auto p-2'>
                <div className='flex items-center gap-2'>
                    <Image src={logo} alt='logo' width={50} height={50} />
                    <h2 className='text-3xl font-bold'>DriveFleet</h2>
                </div>

                <ul className='flex gap-5 items-center'>
                    <li><Link href={'/'} className={`${isActive === "/" ? "border-b-2 border-b-green-500 text-green-600" : ""}`}>Home</Link></li>
                    <li><Link href={'/explore-cars'} className={`${isActive === "/explore-cars" ? "border-b-2 border-b-green-500 text-green-600" : ""}`}>Explore Cars</Link></li>
                    <li><Link href={'/add-car'} className={`${isActive === "/add-car" ? "border-b-2 border-b-green-500 text-green-600" : ""}`}> Add Car</Link></li>
                    <li><Link href={'/my-bookings'} className={`${isActive === "/my-bookings" ? "border-b-2 border-b-green-500 text-green-600" : ""}`}>My Bookings</Link></li>
                </ul>

                {
                    isPending ?
                        <Spinner /> :
                        <ul className='flex gap-3 items-center'>
                            {
                                user ? <>
                                    <li>
                                        <Dropdown>
                                            <Button aria-label="Menu" variant='' className='rounded-full'>
                                                <Avatar>
                                                    <Avatar.Image alt="John Doe" src={user?.image} />
                                                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                                </Avatar>
                                            </Button>
                                            <Dropdown.Popover>
                                                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                                    <Dropdown.Item id="new-file" textValue="New file">
                                                        <Link href={'/add-car'} className='w-full' ><Label>Add Car</Label></Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item id="copy-link" textValue="Copy link">
                                                        <Link href={'/my-bookings'} className='w-full' ><Label>My Bookings</Label></Link>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item id="edit-file" textValue="Edit file">

                                                        <Link href={'/my-added-car'} className='w-full' ><Label>My Added Cars</Label></Link>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item >
                                                        <Button onClick={handleSignOut} variant='danger' className="rounded-md w-full"><CiLogout />LogOut</Button>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown.Popover>
                                        </Dropdown>
                                    </li>
                                </> :
                                    <>
                                        <li>
                                            <Link href={'/login'}>
                                                <Button variant='primary' className="rounded-md">Login</Button>
                                            </Link>
                                        </li>
                                    </>
                            }

                        </ul>
                }
            </div>
        </div>
    );
};

export default Navbar;