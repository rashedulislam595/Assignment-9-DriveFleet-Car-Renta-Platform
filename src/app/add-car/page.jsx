'use client'
import { authClient } from '@/lib/auth-client';
import { postAddCar } from '@/lib/data';
import { Button, Card, FieldError, Input, Label, ListBox, TextArea, TextField, Select, RadioGroup, Radio } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const AddCarPage = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const carData = Object.fromEntries(formData.entries())

        const userAddCarData = {...carData,userId :user?.id,userName:user?.name,userEmail: user?.email}
        // console.log(carData)

        const data = await postAddCar(userAddCarData)
        // console.log(data)
        if (data?.insertedId) {
            toast.success('Car Data Added Successful!', { position: 'top-center', theme: 'dark' })
            redirect('/')
        }
    }

    return (
        <div className='bg-gray-200'>
            <div className='w-11/12 mx-auto py-14'>
                <div className='text-center'>
                    <p className='text-sm font-bold mb-2 text-green-600'>List Your Vehicle</p>
                    <h2 className='text-4xl font-bold mb-2'>Add a Car</h2>
                    <p className='text-[#11111180]'>Fill in the details below to list your vehicle on DriveFleet and <br className='hidden sm:inline' /> start earning.</p>
                </div>

                <div className='my-10'>
                    <form onSubmit={onSubmit}
                        className="p-10 space-y-8 md:w-2xl mx-auto shadow-md border border-gray-300 bg-white rounded-xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* car Name */}
                            <TextField name="carName" isRequired>
                                <Label>Car Name</Label>
                                <Input placeholder="e.g Tesla Model 3" className="rounded-md bg-gray-200" />
                                <FieldError />
                            </TextField>

                            {/* Price */}
                            <TextField name="DailyRentPrice" isRequired>
                                <Label>Daily Rent Price (USD)</Label>
                                <Input placeholder="0" min={0} className="rounded-md bg-gray-200" type='number' />
                                <FieldError />
                            </TextField>

                            {/* car type */}
                            <div>
                                <Select
                                    name="carType"
                                    isRequired
                                    className="w-full"
                                    placeholder="Select Type"
                                >
                                    <Label>Car Type</Label>
                                    <Select.Trigger className="rounded-md bg-gray-200">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="Suv" textValue="Suv">
                                                SUV
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Sedan" textValue="Sedan">
                                                Sedan
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Hatchback" textValue="Hatchback">
                                                Hatchback
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Luxury" textValue="Luxury">
                                                Luxury
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Electric" textValue="Electric">
                                                Electric
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Convertible" textValue="Convertible">
                                                Convertible
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Seat Capacity */}
                            <div>
                                <Select
                                    name="seatCapacity"
                                    isRequired
                                    className="w-full"
                                    placeholder="Select Type"
                                >
                                    <Label>Seat Capacity</Label>
                                    <Select.Trigger className="rounded-md bg-gray-200">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="2 Seats" textValue="2 Seats">
                                                2 Seats
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="4 Seats" textValue="4 Seats">
                                                4 Seats
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="5 Seats" textValue="5 Seats">
                                                5 Seats
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="7 Seats" textValue="7 Seats">
                                                7 Seats
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="8+ Seats" textValue="8+ Seats">
                                                8+ Seats
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Image URL - Removed preview */}
                            <div className="md:col-span-2">
                                <TextField name="imageUrl" isRequired>
                                    <Label>Image URL</Label>
                                    <Input
                                        type="url"
                                        placeholder="https://example.com/your-image.jpg"
                                        className="rounded-md bg-gray-200"
                                    />
                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Pickup Location */}
                            <TextField name="PickupLocation" isRequired>
                                <Label>Pickup Location</Label>
                                <Input placeholder="e.g. Gulshan-2, Dhaka" className="rounded-md bg-gray-200" />
                                <FieldError />
                            </TextField>

                            {/* Availability Status*/}
                            <div className="flex flex-col gap-4">
                                <Label>Availability Status</Label>
                                <RadioGroup defaultValue="Available" name="AvailabilityStatus" orientation="horizontal" >
                                    <Radio value="Available">
                                        <Radio.Control className='border border-gray-400'>
                                            <Radio.Indicator />
                                        </Radio.Control>
                                        <Radio.Content>
                                            <Label>Available</Label>
                                        </Radio.Content>
                                    </Radio>
                                    <Radio value="Unavailable">
                                        <Radio.Control className='border border-gray-400'>
                                            <Radio.Indicator />
                                        </Radio.Control>
                                        <Radio.Content>
                                            <Label>Unavailable</Label>
                                        </Radio.Content>
                                    </Radio>
                                </RadioGroup>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <TextField name="description" isRequired>
                                    <Label>Description</Label>
                                    <TextArea
                                        placeholder="Describe the car - features, condition, special notes..."
                                        className="rounded-md bg-gray-200 h-32"
                                    />
                                    <FieldError />
                                </TextField>
                            </div>
                        </div>

                        {/* Buttons */}

                        <div className='flex justify-between items-center'>
                            <p className='text-[#11111180]'>All fields are required. Listing is live after submission.</p>

                            <Button
                                type="submit"
                                variant="primary"
                                //   isLoading={isPending}
                                className=" rounded-md group"
                            >
                                {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
                                Submit Listing <FaArrowRightLong className='group-hover:translate-x-2 duration-700' />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddCarPage;