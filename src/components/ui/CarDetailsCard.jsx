"use client";
import Image from "next/image";
import { Button, Card, Chip, Input, Separator} from "@heroui/react";
import { CalendarDays, Fuel, Gauge, Settings2, Users, MapPin} from "lucide-react";
import BookNowCard from "./BookNowCard";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const CarDetailsCard =({car})=> {
    const {carName,carType,seatCapacity,imageUrl,AvailabilityStatus,PickupLocation,description} = car;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <Link href={'/explore-cars'}><Button variant="outline" className="text-gray-400 rounded-md hover:text-red-500 border-none mb-1.5 group"><FaArrowLeft className="group-hover:-translate-x-1.5 duration-700" />Back to Explore Car</Button></Link>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-6">

                    {/* CAR IMAGE */}
                    <Card className="shadow-sm border border-gray-200 p-3">
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={carName}
                                width={1200}
                                height={700}
                                className="w-full h-96 object-cover"
                            />

                            <Chip
                                color="success"
                                className="absolute top-4 left-4"
                            >
                                {AvailabilityStatus}
                            </Chip>
                        </div>
                    </Card>

                    {/* SPECS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Fuel */}
                        <Card className="border border-gray-200 shadow-sm p-6">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="mb-3">
                                    <Fuel />
                                </div>
                                <p className="text-xs text-gray-500">Engine</p>
                                <h4 className="font-semibold mt-1">{carType}</h4>
                            </div>
                        </Card>
                        {/* Users */}
                        <Card className="border border-gray-200 shadow-sm p-6">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="mb-3">
                                    <Users />
                                </div>
                                <p className="text-xs text-gray-500">Capacity</p>
                                <h4 className="font-semibold mt-1">{seatCapacity}</h4>
                            </div>
                        </Card>
                        {/* Gauge */}
                        <Card className="border border-gray-200 shadow-sm p-6">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="mb-3">
                                    <Gauge />
                                </div>
                                <p className="text-xs text-gray-500">0-60 mph</p>
                                <h4 className="font-semibold mt-1">1.99s</h4>
                            </div>
                        </Card>
                        {/* Settings */}
                        <Card className="border border-gray-200 shadow-sm p-6">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="mb-3">
                                    <Settings2 />
                                </div>
                                <p className="text-xs text-gray-500">Transmission</p>
                                <h4 className="font-semibold mt-1">Automatic</h4>
                            </div>
                        </Card>
                    </div>

                    {/* DESCRIPTION */}
                    <Card className="border  shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-4">
                            Experience Perfection
                        </h2>

                        <p className="text-gray-600 leading-7">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                            <Chip variant="flat">Autopilot</Chip>
                            <Chip variant="flat">Luxury Interior</Chip>
                            <Chip variant="flat">Glass Roof</Chip>
                            <Chip variant="flat">Premium Audio</Chip>
                        </div>
                    </Card>

                    {/* LOCATION */}
                    <div>
                        <h2 className="text-3xl font-bold mb-5">
                            Location & Pickup
                        </h2>

                        <Card className="border border-gray-200 shadow-sm">
                            <div className="relative">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUSvq65wKke_1QSYKxLQabMyKOrx53u6flskAApoYuvFGvljmndsQfSWGcGLbpNrprInueFtdkFUEmq_f76Y3Y-MNPjptdEim3iCXPIbTnGzb4V2g1-aPsZeAxyJcdo64EqJdvsB4RCoFzLNy7TzRT7MbXVzmm492W8K_OHH4DtnxksDp5H0KQMW9Y48c_7a-ySMcDAoE5uvefuhBqq765qzdt1pW53kIMoNBzc4H_4zPgnlyxj0qwKU5R3316QFRd195hRsz9nFU"
                                    alt="Location"
                                    width={1400}
                                    height={600}
                                    className="w-full h-96 object-cover rounded-2xl"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-black text-white p-3 rounded-full shadow-2xl border-3 border-white" title={PickupLocation}>
                                        <MapPin  />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div >
                    <BookNowCard car={car} />
                </div>
            </div>
        </div>
    );
}

export default CarDetailsCard;