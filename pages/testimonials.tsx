import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

// Testimonial Card component
interface TestimonialCardProps {
  quote: string;
  name: string;
  service: string;
  image?: string;
  rating: number;
  source: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  service, 
  image, 
  rating, 
  source 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        {/* Source badge */}
        <div className="flex justify-between items-center mb-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            source === 'Google' 
              ? 'bg-blue-100 text-blue-800' 
              : source === 'Yelp' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-gray-100 text-gray-800'
          }`}>
            {source}
          </div>
          
          {/* Star rating */}
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        
        {/* Quote */}
        <div className="mb-6">
          <svg className="h-8 w-8 text-teal-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-700 italic">{quote}</p>
        </div>
        
        {/* Client info */}
        <div className="flex items-center">
          {image ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image 
                src={image} 
                alt={name} 
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
              <span className="text-teal-600 font-medium text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-600 text-sm">{service}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Video Testimonial component
interface VideoTestimonialProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ 
  title, 
  description, 
  thumbnailUrl, 
  videoUrl 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={thumbnailUrl} 
          alt={title} 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link 
            href={videoUrl} 
            target="_blank"
            className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center group"
          >
            <svg 
              className="w-8 h-8 text-teal-600 group-hover:text-teal-700 transition-colors" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Main Testimonials page component
const TestimonialsPage = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "I've been going to The Fix Clinic for about a year now, and I'm consistently impressed with the results. Natasha and her team are incredibly knowledgeable and take the time to understand my concerns. My Botox always looks natural, and I've received so many compliments on my skin since starting their recommended skincare regimen.",
      name: "Jennifer L.",
      service: "Botox & Facials",
      rating: 5,
      source: "Google"
    },
    {
      quote: "I was nervous about getting lip filler for the first time, but the team at The Fix Clinic made me feel completely at ease. They listened to what I wanted (natural-looking volume) and delivered exactly that. The results are subtle yet noticeable, and I couldn't be happier with how they turned out!",
      name: "Rebecca S.",
      service: "Lip Filler",
      rating: 5,
      source: "Yelp"
    },
    {
      quote: "I started their medical weight loss program 3 months ago and have already lost 25 pounds! The customized approach and regular check-ins have kept me accountable, and the medications have really helped control my appetite. The staff is so supportive and encouraging throughout the entire process.",
      name: "Michael R.",
      service: "Weight Loss Program",
      rating: 5,
      source: "Google"
    },
    {
      quote: "After struggling with acne scarring for years, I decided to try their microneedling treatments. After just 3 sessions, the improvement in my skin texture is remarkable. The treatment itself was virtually painless, and the recovery time was minimal. Highly recommend!",
      name: "David T.",
      service: "Microneedling",
      rating: 5,
      source: "Facebook"
    },
    {
      quote: "I received Sculptra treatments to address volume loss in my cheeks, and I'm absolutely thrilled with the results. The gradual improvement looks so natural that even my close friends can't pinpoint what's different – they just think I look more refreshed and youthful. The Fix Clinic staff are true artists!",
      name: "Sarah M.",
      service: "Sculptra",
      rating: 5,
      source: "Google"
    },
    {
      quote: "I've been getting regular facials at The Fix Clinic, and my skin has never looked better. The aestheticians really know their stuff and customize each treatment based on what my skin needs that day. The atmosphere is relaxing, and I always look forward to my appointments.",
      name: "Emily W.",
      service: "Facials",
      rating: 5,
      source: "Yelp"
    },
    {
      quote: "The IV therapy at The Fix Clinic has been a game-changer for my energy levels. As someone who travels frequently for work, I often felt run down. Now I schedule an IV session after long trips, and it helps me recover so much faster. Great service and knowledgeable staff!",
      name: "James K.",
      service: "IV Therapy",
      rating: 5,
      source: "Google"
    },
    {
      quote: "I received under-eye filler to address my hollows and dark circles. The results are amazing! I look so much more rested and refreshed. The injector was meticulous and took her time to ensure everything was perfectly balanced. Worth every penny!",
      name: "Lauren B.",
      service: "Under-eye Filler",
      rating: 5,
      source: "Facebook"
    }
  ];

  // Video testimonials data
  const videoTestimonials = [
    {
      title: "My Botox Experience",
      description: "Jessica shares her experience with Botox treatments at The Fix Clinic and how it has improved her confidence.",
      thumbnailUrl: "/images/testimonials/video-thumb-1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example1"
    },
    {
      title: "Weight Loss Journey",
      description: "Mark discusses his 6-month transformation with our medical weight loss program and the support he received.",
      thumbnailUrl: "/images/testimonials/video-thumb-2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example2"
    },
    {
      title: "Facial Rejuvenation Results",
      description: "Amanda shows her before and after results from a combination of treatments for comprehensive facial rejuvenation.",
      thumbnailUrl: "/images/testimonials/video-thumb-3.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example3"
    }
  ];

  return (
    <Layout title="Testimonials | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-72 w-full bg-gray-100">
        <Image 
          src="/images/testimonials/testimonials-hero.jpg" 
          alt="Client Testimonials"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h1>
              <p className="text-white text-lg md:text-xl">
                Hear what our clients have to say about their experiences and results at The Fix Clinic.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Written Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Client Reviews"
            title="What Our Clients Say"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                service={testimonial.service}
                image={testimonial.image}
                rating={testimonial.rating}
                source={testimonial.source}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Client Stories"
            title="Video Testimonials"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <VideoTestimonial 
                key={index}
                title={video.title}
                description={video.description}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Results for Yourself?</h2>
            <p className="text-lg mb-8">
              Book your consultation today and join our community of satisfied clients.
            </p>
            <Link 
              href="https://thefixclinic.janeapp.com/" 
              target="_blank"
              className="inline-block bg-white text-teal-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Book Your Consultation
            </Link>
          </div>
        </Container>
      </section>

      {/* Review Disclaimer */}
      <section className="py-8 bg-gray-50">
        <Container>
          <div className="text-center text-gray-600 text-sm">
            <p>
              All testimonials represent the personal experience of our clients. Individual results may vary.
              <br />These reviews have been collected from various platforms including Google, Yelp, Facebook, and direct client feedback.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;