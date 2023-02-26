import { fredoka, rockSalt } from "../fonts";


const Splash = () => {
    return (
        <div className="">
            <div className="h-[60vh]">
                {/* <Image 
                    src={group_03}
                    alt="Background image"
                    fill={true}
                    priority={true}
                    sizes="100vw"
                    className="object-cover object-top opacity-30"
                /> */}

                <div className="flex flex-col justify-center text-center container m-auto h-5/6 relative">
                    <div className={fredoka.className}>
                        <h1 className="text-6xl sm:text-9xl justify-center text-[#F73D93] my-5 customShadow">
                            Dreamers
                        </h1>
                    </div>

                    <div className={rockSalt.className}>
                        <h1 className="text-4xl sm:text-5xl justify-center text-[#16003B] -rotate-6">
                            Dance Studio
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Splash;