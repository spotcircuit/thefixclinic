import Card from './Card'; // Import the reusable Card component

// Define an interface for Testimonial props
interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
}

// Placeholder data for testimonials
const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: "The team at The Fix Clinic is truly exceptional. From the moment I walked in, I felt welcomed and understood. My results are incredible, and I couldn't be happier!",
    clientName: 'Sarah L.',
  },
  {
    id: '2',
    quote: "I've never experienced such a high level of professionalism and care. The attention to detail and personalized approach made all the difference. Highly recommend!",
    clientName: 'Michael B.',
  },
  {
    id: '3',
    quote: "A truly transformative experience. The expertise here is evident, and the atmosphere is so calming. I feel rejuvenated and more confident than ever.",
    clientName: 'Jessica P.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-versailles text-primary text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col justify-between"> {/* Ensure cards have equal height if content varies */}
              <div>
                <p className="font-apfel italic text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              <div>
                <p className="font-apfel font-semibold text-primary text-right">
                  - {testimonial.clientName}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
