import { Star } from "lucide-react";

const Descriptions = () => {
    const BorderSection = () => {
        return (
            <div className="flex flex-row justify-center py-10 gap-5">
                {Array.from({ length: 10 }).map((_, i) => (
                    <Star key={i} fill="#F73D93" strokeWidth={0} size={12} />
                ))}
            </div>
        );
    };


    return (
        <section id="About" className="container m-auto py-6 px-5">
            <BorderSection />

            <p className="max-w-7xl text-center mx-auto text-lg">
                <span className="text-accent font-bold">Dreamers Dance Studio</span> is a portfolio project to showcase a dance studio website. This project features clean typography, images, accent colors and several sections of information. The information is all template text used for sample purposes. Dreamers Dance Studio is not a real studio. The contact information will redirect you to Blueprint Web Dev where you can view my other work. Feel free to contact me with inquiries for your future project.   
            </p>

            <BorderSection />
        </section>
    );
}

export default Descriptions;