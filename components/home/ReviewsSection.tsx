import React from 'react';
import Container from '../ui/Container';
import { FaStar, FaGoogle } from 'react-icons/fa';

// Sample reviews data
const reviews = [
  {
    id: 1,
    name: 'Kelly Van Assche',
    date: '2024-07-06',
    rating: 5,
    content: "I've seen Teneille twice so far for Morpheus to my face. She is caring, knowledgeable, funny and makes you feel comfortable during the whole process. I got there an hour early for numbing, during the process she explains what she is doing as she works which made me feel more comfortable. Afterwards, my face was pink like a mild sunburn which lasted less than a day. I purchased the aftercare set. My skin is tighter and brighter than before and I'm not done with my package yet! Looking forward to working with Teneille more as she helps me in my anti-aging routine!"
  },
  {
    id: 2,
    name: 'Kastle Cannon',
    date: '2024-07-05',
    rating: 5,
    content: "I had a morpheus RF treatment done with Teneille Darlington, their very qualified nurse practitioner. She is OUTSTANDING. She was so kind and genuinely wanted to know my skin concerns. The procedure itself was NOT bad. The numbing cream is essential, but she worked fast and I never fully felt the microneedling. I was red and a bit puffy afterwards, but not to the point of needing time off work, and all was coverable with light makeup. Loved my results- as my colleagues put it, I looked like I was wearing a \"skin filter.\" YES! Go see her!"
  },
  {
    id: 3,
    name: 'Hollie Wilee',
    date: '2024-06-28',
    rating: 5,
    content: "My facial with Su was fabulous! She is so thorough and the entire experience was wonderful!"
  },
  {
    id: 4,
    name: 'Wendi Londner',
    date: '2024-06-27',
    rating: 5,
    content: "I recently had a facial from Hayley and had an outstanding experience. The customer service was exceptional, with the staff going above and beyond to ensure my needs were met. The quality of Hayley's service was top-notch. She is an extremely skilled provider and always delivers an amazing experience."
  },
  {
    id: 5,
    name: 'Shazia Chaudhry',
    date: '2024-06-11',
    rating: 5,
    content: "I recently visited Fix Clinic and had an incredible experience! From the moment I walked in, I felt welcome and at ease. The staff were friendly and professional, and the clinic was spotless. My treatment was tailored to my specific needs, and the results were amazing! I was impressed by the level of expertise and care shown by Tenneille. She took the time to explain each step of the treatment and made sure I was comfortable throughout. I'm so pleased with the results and will definitely be back for future treatments. I highly recommend Fix Clinic to anyone looking for a professional and friendly aesthetic clinic."
  }
];

const ReviewsSection = () => {
  // Function to truncate text
  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h5 className="text-xl text-secondary-dark mb-2">Our Reviews</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">BELIEVE THE HYPE.</h2>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <span className="text-gray-700 font-semibold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        <FaGoogle className="inline mr-1" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {truncateText(review.content)}
                </p>
                <div className="text-right mt-4">
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;