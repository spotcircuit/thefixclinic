import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
  {
    id: 1,
    src: '/images/team/caitlin.webp',
    alt: 'The Fix Clinic Interior'
  },
  {
    id: 2,
    src: '/images/team/rachel.webp',
    alt: 'Treatment Room'
  },
  {
    id: 3,
    src: '/images/team/hayley.webp',
    alt: 'PRF Treatment'
  },
  {
    id: 4,
    src: '/images/team/natasha.webp',
    alt: 'Clinic Lobby'
  },
  {
    id: 5,
    src: '/images/misc/lip-after-10.webp',
    alt: 'Laser Treatment'
  },
  {
    id: 6,
    src: '/images/misc/lip-after-3.webp',
    alt: 'Filler Treatment'
  }
];

const ImageGallerySection = () => {
  return (
    <section className="py-8 bg-accent-light overflow-hidden">
      <Container fluid>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className="sepia-effect"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="h-64 relative overflow-hidden rounded-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ImageGallerySection;