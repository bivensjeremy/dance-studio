import Image from "next/image";
import { rockSalt } from "../fonts";
import NavLink from "./NavLink";
import ServiceGallery from "./ServiceGallery";

const ServiceCard = ({ props }) => {
    return (
        <div className="container py-12">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex w-full max-h-[800px]">
                    <Image
                        src={props.headerImage}
                        alt="Service Header Image"
                        priority={true}
                        sizes="50vw"
                        className="object-cover object-top rounded-lg"
                    />
                </div>

                <div className="grow">
                    <div className={rockSalt.className}>
                        <h2 className="text-6xl py-7">
                            {props.title}
                        </h2>
                    </div>
                    
                    <div className="py-7">
                        {props.description}
                    </div>
                    
                    <div>
                        <NavLink className="btn" href="/products/enrollment">
                            Application
                        </NavLink>
                    </div>
                    
                </div>
            </div>
            <ServiceGallery props={props.photos} />
        </div>

    );
}

export default ServiceCard;