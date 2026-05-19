import AvailableCars from "@/components/AvailableCars";
import Banner from "@/components/Banner";
import ChooseDriveFleet from "@/components/ChooseDriveFleet";
import PopularDestinations from "@/components/PopularDestinations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AvailableCars/>
      <ChooseDriveFleet/>
      <PopularDestinations/>
    </div>
  );
}
