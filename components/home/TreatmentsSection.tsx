import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/Container';
import { FaLongArrowAltRight } from 'react-icons/fa';

const treatments = [
  {
    id: 1,
    name: 'Functional Wellness',
    image: '/images/services/weight-loss-women.webp',
    link: '/weight-loss-wellness',
  },
  {
    id: 2,
    name: 'Facial Balancing',
    image: '/images/services/facial-balancing-hero.jpg',
    link: '/facial-balancing',
  },
  {
    id: 3,
    name: 'Skin',
    image: '/images/services/skin-hero.jpg',
    link: '/skin',
  },
];

const TreatmentsSection = () => {
  return (
    <section className="py-16 bg-accent">
      <Container>
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">
            Explore Our Treatments.
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <Link
              key={treatment.id}
              href={treatment.link}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex justify-between items-center">
                <h4 className="text-xl font-semibold text-primary">{treatment.name}</h4>
                <span className="text-primary transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                  <FaLongArrowAltRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TreatmentsSection;