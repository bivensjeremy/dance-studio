import Image from "next/image";
import Link from "next/link";
import { serviceData } from "../data";
import { Surface } from "@heroui/react";


const SectionsCard = ({ title, cardImage }, idx) => {
    return(
        <div key={idx} id="OurServices" className="flex justify-center h-96">
            <Surface className="flex flex-col rounded-3xl max-w-sm relative w-full text-3xl justify-center text-center text-accent overflow-hidden hover:bg-accent hover:text-white transition duration-150 ease-in-out">
                <Link href={`/products/${title}`}>
                    <Image 
                        src={cardImage}
                        alt="Background image"
                        fill={true}
                        sizes="33vw"
                        className="object-cover rounded-3xl transition duration-150 ease-in-out hover:opacity-0"
                    />
                </Link>
                
                <div>
                    <h2 className="font-accent">{title}</h2>
                </div>
            </Surface>
        </div>
    )
}

const Sections = () => {
    return (
        <div className="container m-auto py-12">
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
                {serviceData.map(
                    SectionsCard
                )}
            </div>
        </div>
    );
}

export default Sections;