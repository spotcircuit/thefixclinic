import Button from './Button'; // Import the reusable Button component

const CtaSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-versailles text-primary mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="font-apfel text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Take the first step towards rejuvenating your confidence and well-being. Our expert team is here to guide you through a personalized experience tailored to your unique aesthetic goals.
        </p>
        <Button href="/contact" variant="primary" className="text-lg px-10 py-4">
          Book Your Consultation
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
