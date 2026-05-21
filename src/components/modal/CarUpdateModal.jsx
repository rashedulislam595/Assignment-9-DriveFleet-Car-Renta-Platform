'use client'
import React from 'react';
import { Button, FieldError, Select, Input, Label, ListBox, Modal, Surface, TextArea, TextField, RadioGroup, Radio } from "@heroui/react";
import { updateCarData } from '@/lib/data';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';

const CarUpdateModal = ({ car }) => {

    const { _id, DailyRentPrice, carType, imageUrl, AvailabilityStatus, PickupLocation, description } = car;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userUpdateCarData = Object.fromEntries(formData.entries());
        

        const data = await updateCarData(_id,userUpdateCarData) 
        // console.log("after server response", data)

        if (data.modifiedCount > 0) {
            toast.success("Update successful!", { theme: "dark", position: 'top-center' })
        }
        redirect('/my-added-car')

    }
    return (
        <div>
            <Modal >
                <Button variant="ghost" className="rounded-md border border-gray-400" >Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Edit Car</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-4">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit}
                                        className="p-4 space-y-8  mx-auto shadow-md border border-gray-300 bg-white rounded-xl"
                                    >
                                        <div className="space-y-5">

                                            {/* Price */}
                                            <TextField name="DailyRentPrice" isRequired defaultValue={DailyRentPrice}>
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
                                                    defaultValue={carType}
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

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
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
                                            <TextField name="PickupLocation" isRequired defaultValue={PickupLocation}>
                                                <Label>Pickup Location</Label>
                                                <Input placeholder="e.g. Gulshan-2, Dhaka" className="rounded-md bg-gray-200" />
                                                <FieldError />
                                            </TextField>

                                            {/* Availability Status*/}
                                            <div className="flex flex-col gap-4">
                                                <Label>Availability Status</Label>
                                                <RadioGroup defaultValue={AvailabilityStatus} name="AvailabilityStatus" orientation="horizontal" >
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
                                                <TextField name="description" isRequired defaultValue={description}>
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
                                        <Modal.Footer>
                                            <Button type='submit' slot="close" className='w-full rounded-md' >Save</Button>
                                        </Modal.Footer>

                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default CarUpdateModal;