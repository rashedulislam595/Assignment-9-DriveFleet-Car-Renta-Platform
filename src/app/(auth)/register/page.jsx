"use client"
import React, { useState } from 'react';
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField, InputGroup, Separator } from "@heroui/react";
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);
        // console.log(userData);
        const { fullName, password, email, imageUrl } = userData;

        const { data, error } = await authClient.signUp.email({
            name: fullName,
            email: email,
            password: password,
            image: imageUrl,
            callbackURL: "/login",
        });

        if (data) {
            toast.success("Welcome! Your account has been created successfully.", { theme: "dark", position: "top-center" })
            router.push('/login')
        } else {
            toast.error(error.message, { theme: "dark", position: "top-center" })
        }
    }

    // signin with google
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        if (data) {
            toast.success("Welcome back! You're now logged in.", { theme: "dark", position: "top-center" })
        }
    };

    return (
        <div className='bg-gray-200'>
            <div className='w-10/12 md:w-9/12  mx-auto py-20 md:grid md:grid-cols-2 '>
                {/* left side image and heading */}
                <div className='hidden md:block group overflow-hidden relative rounded-l-xl shadow-md'>
                    <Image src={'https://lh3.googleusercontent.com/aida-public/AB6AXuBC_pBy-uL2hvVR5vaWNzNVT5jH3LxGvIGTMuTxmTD8AE-lJlLgqd509LDUWIE4ZI4wxl3OFwgry1b-7d14djPH7FAzh09-Tli7nUaY3E-ZmgXZ1WyOMYLQAAusz7Q7OjzdwZPmFLh7ZPVynS9HykjPUXf1y0hGYVu8K1_SuQ-aGyKsRKmMexiA-WpLxa7yCuj3vajzYchj2-kSZMr9ihXvbLYzcFw-WyummhzJ8ahn-2xA8DBTDg04VzwV45SGG_yXXpP-qXioNjw'} alt='car-image' width={400} height={400} className='w-full h-full  group-hover:scale-110 duration-700' />
                    <div className='text-white absolute bottom-5 left-5'>
                        <h2 className='text-2xl font-extrabold mb-2'>Precision <br />Engineering for the <br />Modern Road.</h2>
                        <p className="opacity-80 text-sm">Join the elite fleet of drivers who<br /> demand reliability and luxury in every mile.</p>
                    </div>
                </div>
                {/* login form right side container */}
                <div className='bg-white p-5 rounded-xl md:rounded-r-xl md:rounded-l-none shadow-md border'>
                    <div className='mb-5 text-center md:text-left'>
                        <h2 className='text-3xl font-bold mb-1.5'>Join DriveFleet</h2>
                        <p className='text-[#11111180]'>Start your premium driving journey today.</p>
                    </div>
                    <Form className="flex  flex-col gap-4" onSubmit={onSubmit}>
                        <div className='md:grid grid-cols-2 gap-4 space-y-3 md:space-y-0'>
                            {/* full name */}
                            <TextField isRequired className="w-full " name="fullName">
                                <Label>Full Name</Label>
                                <Input placeholder="John Doe" className='rounded-md bg-gray-200' />
                                <FieldError />
                            </TextField>
                            {/* image url */}
                            <TextField isRequired name="imageUrl" type="url">
                                <Label>Photo URL</Label>
                                <Input placeholder="https://example.com" className='rounded-md bg-gray-200 ' />
                            </TextField>

                        </div>
                        {/* email */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input name='email' placeholder="test@example.com" className='bg-gray-200 rounded-md' />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={6}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 6) {
                                    return "Password must be at least 6 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[a-z]/.test(value)) {
                                    return "Password must contain at least one lowercase letter";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <InputGroup className='bg-gray-200 rounded-md'>
                                <InputGroup.Input
                                    className="w-full "
                                    type={isVisible ? "text" : "password"}
                                    placeholder='Enter your password'
                                />
                                <InputGroup.Suffix className="pr-0">
                                    <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                            <FieldError />
                        </TextField>
                        <div className="flex gap-2">
                            <Button type="submit" variant='primary' className='rounded-md w-full'>
                                Register
                            </Button>
                        </div>
                    </Form>
                    <div className='flex gap-3 items-center justify-center overflow-hidden my-5'>
                        <Separator className='border ' />
                        <p className='font-bold text-sm text-[#11111170]'>OR</p>
                        <Separator className='border ' />
                    </div>
                    <Button onClick={signIn} variant='outline' className='rounded-md w-full'>
                        <FcGoogle />
                        Continue with Google
                    </Button>
                    <p className='text-[#11111180] text-center my-3'>Do not have an account? <span><Link href={'/login'} className='text-blue-700 font-bold'>Login</Link></span> </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;