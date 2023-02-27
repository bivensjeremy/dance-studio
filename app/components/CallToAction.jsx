import Image from "next/image";
import Link from "next/link";
import { fredoka } from "../fonts";

const CallToAction = () => {
    return (
        <div id="ContactUs" className="flex flex-col md:flex-row gap-3 justify-between container m-auto py-5">
            <div className="md:w-1/3 text-center m-auto">
                <h3 className={`${fredoka.className} text-3xl text-center pb-3`}>Are you ready to take your business to the next level with your own website?</h3>

                <h4 className="text-2xl font-bold text-center uppercase">Contact me today!</h4>
            </div>

            {/* <div className="">
                <Link href='https://bivensblueprint.com'>
                    <Image
                        src='/blueprint_logo.png'
                        alt='Blueprint Logo'
                        width={80}
                        height={80}
                    />
                </Link>
            </div> */}
                    
            
            <div className="m-auto w-1/3 text-center">
                <Link href="https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d" className="btn">
                    Let's Get Started
                </Link>
            </div>
        </div>
    );
}

export default CallToAction;