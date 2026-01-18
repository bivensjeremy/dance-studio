import Image from "next/image";
import ServiceGallery from "./ServiceGallery";
import { Button } from "@heroui/react";
import Link from "next/link";

const ServiceCard = (props) => {
    
    return (
        <div className="container py-12">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex w-full max-h-200">
                    <Image
                        src={props.headerImage}
                        alt="Service Header Image"
                        priority={true}
                        sizes="50vw"
                        className="object-cover object-top rounded-lg"
                    />
                </div>

                <div className="grow">
                    <div className='font-accent'>
                        <h2 className="text-6xl py-7">
                            {props.title}
                        </h2>
                    </div>
                    
                    <div className="py-7">
                        {props.description}
                    </div>
                    
                    <div>
                        <Link href='/products/enrollment'>
                            <Button className='rounded-lg' size="lg">
                                Application
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <ServiceGallery props={props.photos} />
        </div>

    );
}

export default ServiceCard;