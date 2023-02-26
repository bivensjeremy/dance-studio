import Image from "next/image";

const ServiceGallery = ({ props }) => {
    return (
        <section className="overflow-hidden">
            <div className="container mx-auto px-6 pt-16">
                <p className="text-center italic text-sm">All images used for demonstration purposes and belong to their respective owners.</p>
                <div className="flex flex-wrap">
                    {props.map((photo, index) => (
                        <div key={index} className="flex w-1/2 md:1/4 flex-wrap bg-[transparent]">
                            <div className="w-full h-40 md:h-80 p-2">
                                <Image 
                                    src={photo}
                                    width={300}
                                    height={300}
                                    alt='Gallery Sample Image'
                                    sizes='25vw'
                                    className='h-full w-full rounded-lg object-top object-cover hover:object-scale-down hover:object-center'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceGallery;