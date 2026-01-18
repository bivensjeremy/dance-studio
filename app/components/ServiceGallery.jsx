import Image from "next/image";

const ServiceGallery = ({ props }) => {
    return (
        <section className="overflow-hidden">
            <div className="container mx-auto px-6 pt-16">
                <p className="text-center italic text-sm">All images used for demonstration purposes and belong to their respective owners.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    {props.map((photo, index) => (
                        <div key={index} className="group relative h-40 w-full md:h-80 overflow-hidden rounded-lg bg-gray-200">
                            <Image 
                                src={photo}
                                fill
                                alt={`Gallery image ${index}`}
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />

                        <div className="
                            absolute inset-0 z-10 
                            flex items-center justify-center 
                            bg-black/40 backdrop-blur-md 
                            opacity-0 transition-opacity duration-500 ease-in-out 
                            group-hover:opacity-100
                        ">
                            <div className="relative h-full w-full p-4">
                                <Image 
                                    src={photo}
                                    fill
                                    alt={`Gallery image ${index} full view`}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}

export default ServiceGallery;