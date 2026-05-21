import { Button } from "@heroui/react";
import { CarFront, Plus } from "lucide-react";
import Link from "next/link";

const MyAddedCarEmpty = () => {
    return (
        <div className="flex items-center justify-center min-h-[70vh] px-4">
            <div className="max-w-lg w-full text-center border border-dashed border-gray-300 rounded-3xl p-10 bg-white shadow-sm">
                
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                    <CarFront className="w-10 h-10 text-gray-500" />
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mt-6">
                    No Cars Added Yet
                </h2>

                <p className="text-gray-500 mt-3 leading-7">
                    You haven’t added any cars yet. Start listing your cars
                    to make them available for booking and reach more customers.
                </p>

                <Link href="/add-car">
                    <Button
                        color="primary"
                        className="mt-8 font-semibold"
                        startContent={<Plus size={18} />}
                    >
                        Add Your First Car
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default MyAddedCarEmpty;