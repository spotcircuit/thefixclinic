import Card from './Card'; // Assuming Card.tsx is in the same components directory
import Button from './Button'; // For a potential "View All Services" button later

// Define an interface for Service Category props if we were fetching data
interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  // imageUrl?: string; // Optional image
}

// Placeholder data for service categories
const serviceCategoriesData: ServiceCategory[] = [
  {
    id: '1',
    title: 'Aesthetic Injections',
    description: 'Smooth wrinkles and restore volume with our expertly administered injectables for a refreshed, youthful appearance.',
    // imageUrl: '/images/service-injections.jpg', // Example image path
  },
  {
    id: '2',
    title: 'Skin Rejuvenation',
    description: 'Revitalize your skin\'s texture and tone with advanced treatments designed to promote clarity and radiance.',
    // imageUrl: '/images/service-skin.jpg',
  },
  {
    id: '3',
    title: 'Wellness Therapies',
    description: 'Enhance your overall well-being with therapies that support balance, vitality, and inner harmony.',
    // imageUrl: '/images/service-wellness.jpg',
  },
  // {
  //   id: '4',
  //   title: 'Laser Treatments',
  //   description: 'Advanced laser solutions for hair removal, skin resurfacing, and pigment correction.',
  //   // imageUrl: '/images/service-laser.jpg',
  // }
];

const ServiceCategoriesSection = () => {
  return (
    <section className="bg-background py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-versailles text-primary text-center mb-16">
          Explore Our Treatments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceCategoriesData.map((service) => (
            <Card
              key={service.id}
              className="flex flex-col group hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Optional: Image can be added here if Card component supports it
              {service.imageUrl && (
                <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              )} */}
              <div className="p-2 flex flex-col flex-grow"> {/* Added p-2 for slight internal padding if needed, and flex-grow */}
                <h3 className="text-2xl font-apfel text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-apfel text-gray-700 text-base mb-6 flex-grow"> {/* flex-grow to push button down */}
                  {service.description}
                </p>
                {/* Example of using the Button component within a card, could link to a detailed service page */}
                {/* <Button href={`/services/${service.id}`} variant="secondary" className="mt-auto">
                  Learn More
                </Button> */}
              </div>
            </Card>
          ))}
        </div>
        {/* Optional: A button to view all services */}
        {/* <div className="text-center mt-16">
          <Button href="/services" variant="primary">
            View All Services
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceCategoriesSection;
