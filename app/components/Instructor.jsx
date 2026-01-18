import Image from "next/image"

export const Instructor = () => {
    // instructor
    return (
        <section className="container mx-auto">
            <div className="py-10 lg:py-10 p-4 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left column: text */}
                    <div className="md:col-span-6 order-2 md:order-1">
                        <div className="max-w-2xl">
                            <h3 className='font-accent text-xl'>
                                Meet the Developer
                            </h3>

                            <h2 className='font-heading text-4xl font-extrabold text-accent'>
                                Jeremy Bivens
                            </h2>

                            <h3 className='text-md font-bold'>
                                Founder & Lead Developer
                            </h3>
                            
                            <p className="mb-4 mt-2">
                                Jeremy is the founder and lead developer of <strong>Blueprint Web Dev.</strong> A web design agency built on the principle that business owners should have high-quality, modern websites but should not be left to manage it themselves. We provide full support including hosting, updates and any maintenance needed so you can focus on your business while we worry about the website.  
                            </p>
                        </div>
                    </div>

                {/* Right column: image/card cluster */}
                <div className="md:col-span-6 order-1 md:order-2">
                    <div className="relative flex items-center justify-center">
                        {/* Centered headshot */}
                        <Image 
                            src="/jeremy_profile.jpeg"
                            alt="Blueprint Web Dev - Jeremy Headshot"
                            width={300}
                            height={500}
                            className="relative z-10 rounded-full object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}