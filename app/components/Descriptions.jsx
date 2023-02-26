const { Star } = require("lucide-react");


const Descriptions = () => {
    
    const starBorder = () => {
        let content = [];
        for (let i = 0; i < 10; i++) {
            content.push(
                <Star fill="#F73D93" strokeWidth={0} size={12} id={content.id} />
            )
        }
        return content;
    };

    const BorderSection = () => {
        return(
            <div className="flex flex-row justify-center py-6 gap-5">
                {starBorder()}
            </div>
        )
    }

    return (
        <div id="About" className="container m-auto py-6 px-5">
            {BorderSection()}

            <p className="">
                <span style={{ color: '#F73D93', fontWeight: 'bold' }}>Dreamers Dance Studio</span> is a website template to showcase a premium dance studio website for your enjoyment! Features of this site include an image gallery, contact information, a sample policy, enrollment application, and descriptions for services offered. The information is all template language and used for sample purposes. Dreamers Dance Studio is not a real studio. Using the Contact page will redirect you to Bivens Blueprint, LLC. where you can view my other work. Feel free to contact me with inquiries for your future project.   
            </p>

            {BorderSection()}
        </div>
    );
}

export default Descriptions;