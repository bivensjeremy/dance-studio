import Image from "next/image";
import Link from "next/link";
import { rockSalt } from "../fonts";
import { serviceData } from "../data";


const SectionsCard = ({ id, title, cardImage }) => {
    return(
        <div key={id} id="OurServices" className="flex justify-center h-96">
            <div className="flex flex-col rounded-3xl max-w-sm relative w-full sectionBtn overflow-hidden">
                <Link href={`/products/${title}`}>
                    <Image 
                        src={cardImage}
                        alt="Background image"
                        fill={true}
                        sizes="33vw"
                        priority
                        className="object-cover rounded-3xl transition duration-150 ease-in-out hover:opacity-0"
                    />
                </Link>
                
                <div className={`${rockSalt.className}`}>
                    <h2 className="">{title}</h2>
                </div>
            </div>
        </div>
    )
}

const Sections = () => {
    return (
        <div className="container m-auto py-12 px-5">
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
                {serviceData.map(
                    SectionsCard
                )}
            </div>
        </div>
    );
}

export default Sections;