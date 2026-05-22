import { authClient } from '@/lib/auth-client';
import { postCarBooking } from '@/lib/data';
import { Button, Label, Modal, Surface, Select, ListBox, TextField, TextArea, FieldError, RadioGroup, Radio, Input } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const BookNowModal = ({ car, pickupDate, returnDate, total, yourDay }) => {

    const { data: session } = authClient.useSession()
    const user = session?.user;

    const { _id, carName, imageUrl, PickupLocation, seatCapacity } = car;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const carData = Object.fromEntries(formData.entries())
        // console.log(carData)
        const { driverNeeded, specialNote } = carData

        const bookingUserData = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            userImage: user?.image,
            carId: _id,
            carName,
            carImage: imageUrl,
            PickupLocation,
            seatCapacity,
            driverNeeded,
            specialNote,
            totalCost: total,
            yourDay,
            bookingDate: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }),
            pickupDate: new Date(pickupDate),
            returnDate: new Date(returnDate),

        }

        const data = await postCarBooking(bookingUserData)

        if (data?.result?.insertedId) {
            toast.success('Car Booking Successful!', { position: 'top-center', theme: 'dark' })
            redirect('/')
        }

    }

    return (
        <Modal>
            <Button variant="primary" className="rounded-md w-full mt-6 font-semibold">
                Book Now
            </Button>
            <Modal.Backdrop>
                <Modal.Container
                    placement="auto"
                    className="w-full px-3 sm:px-4 flex items-end sm:items-center justify-center min-h-screen"
                >
                    <Modal.Dialog className="w-full max-w-md mx-auto">
                        <Modal.CloseTrigger />
                        <Modal.Header className="px-4  pb-2 sm:px-6 ">

                            <Modal.Heading className="text-base font-bold ">
                                <p className='text-green-600 text-sm tracking-[4px]'>BOOKING FORM</p>
                                <span className='text-3xl '>{carName}</span>
                            </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-3 sm:p-4">
                            <Surface variant="default">
                                <form onSubmit={onSubmit}
                                    className="p-4  mx-auto shadow-md border border-gray-300 bg-white rounded-xl"
                                >
                                    {/* Driver Needed */}
                                    <div className='mb-4'>
                                        <Select
                                            name="driverNeeded"
                                            isRequired
                                            className="w-full"
                                            placeholder="Select Type"
                                        >
                                            <Label>Driver Needed</Label>
                                            <Select.Trigger className="rounded-md bg-gray-200">
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    <ListBox.Item id="Yes" textValue="Yes">
                                                        Yes
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="No" textValue="No">
                                                        No
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </div>

                                    {/* Special Note */}
                                    <div className=" w-full mb-5">
                                        <TextField name="specialNote" isRequired>
                                            <Label>Special Note</Label>
                                            <TextArea
                                                placeholder="Write your special note..."
                                                className="rounded-md bg-gray-200 h-24"
                                            />
                                            <FieldError />
                                        </TextField>
                                    </div>

                                    {/* Buttons */}
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        //   isLoading={isPending}
                                        className=" rounded-md w-full "
                                    >
                                        Book Now
                                    </Button>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookNowModal;