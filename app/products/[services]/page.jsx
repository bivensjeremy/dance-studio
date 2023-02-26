
import ServiceCard from "@/app/components/serviceCard";
import { serviceData } from "../../data";

export async function generateStaticParams() {
    const services = await serviceData;

    return services.map((service) => ({
        services: service.id.toString(), service
    }));
}

const ServicePage = ({ params }) => {
    
    return(
        <div>
            {(function() {
                switch (params.services) {
                    case 'Dance':
                        return (
                            <ServiceCard props={serviceData[0]} />
                        )
                    case 'Model':
                        return (
                            <ServiceCard props={serviceData[1]} />
                        )
                    case 'Photography':
                        return(
                            <ServiceCard props={serviceData[2]} />
                        )
                    default:
                        break;
                }
            }) ()}
        </div>
    )
}

export default ServicePage;