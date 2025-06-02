import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const awards = [
  {
    id: 1,
    name: 'Executive Award',
    image: '/images/awards/executive-award.png'
  },
  {
    id: 2,
    name: 'Best of Ashburn Award',
    image: '/images/awards/best-of-ashburn.png'
  },
  {
    id: 3,
    name: 'BOAM 2023 Logo',
    image: '/images/awards/boam-award.png'
  },
  {
    id: 4,
    name: 'BOA White Black Green Award',
    image: '/images/awards/boa-award.png'
  },
  {
    id: 5,
    name: 'Merz VIP Logo',
    image: '/images/awards/merz-vip.png'
  }
];

const AwardsSection = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
          OUR AWARDS
        </h2>
        
        {/* Mobile Awards Layout */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {awards.slice(0, 4).map((award) => (
            <div key={award.id} className="flex justify-center">
              <Image
                src={award.image}
                alt={award.name}
                width={150}
                height={150}
                className="h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Desktop Awards Carousel */}
        <div className="hidden md:block">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {awards.map((award) => (
              <SwiperSlide key={award.id}>
                <div className="flex justify-center items-center h-24">
                  <Image
                    src={award.image}
                    alt={award.name}
                    width={150}
                    height={150}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default AwardsSection;