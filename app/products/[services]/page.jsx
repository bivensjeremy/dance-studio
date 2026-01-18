
import ServiceCard from "@/app/components/ServiceCard";
import { serviceData } from "../../data";

export function generateStaticParams() {
    return serviceData.map((service) => ({
        services: service.title
    }));
}

const ServicePage = async ({ params }) => {
  const { services } = await params;

  const service = serviceData.find(
    (s) => s.title === services
  );

  if (!service) {
    return <p className="p-10 text-center">Service not found</p>
  }
  
  return (
    <div>
      <ServiceCard {...service} />
    </div>
  );
};

export default ServicePage;