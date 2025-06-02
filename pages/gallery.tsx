import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Image from 'next/image';

// Gallery Item component
interface GalleryItemProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  category: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ beforeImage, afterImage, title, description, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer" onClick={onClick}>
      <div className="grid grid-cols-2 gap-1">
        <div className="relative h-56 overflow-hidden">
          <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs py-1 px-2 rounded-md opacity-80 z-10">
            Before
          </div>
          <Image 
            src={beforeImage} 
            alt={`Before ${title}`} 
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-56 overflow-hidden">
          <div className="absolute top-2 right-2 bg-teal-600 text-white text-xs py-1 px-2 rounded-md opacity-80 z-10">
            After
          </div>
          <Image 
            src={afterImage} 
            alt={`After ${title}`} 
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Modal component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, beforeImage, afterImage, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto p-4 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="font-medium text-gray-700">Before</div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src={beforeImage} 
                  alt={`Before ${title}`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-gray-700">After</div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src={afterImage} 
                  alt={`After ${title}`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-2">Treatment Details</h4>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Gallery page component
const GalleryPage = () => {
  const [filter, setFilter] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      beforeImage: "/images/gallery/lip-before-7.webp",
      afterImage: "/images/gallery/lip-after-7.webp",
      title: "Lip Enhancement",
      description: "This client received lip filler to enhance volume and definition, creating a more balanced and youthful appearance.",
      category: "filler"
    },
    {
      id: 2,
      beforeImage: "/images/gallery/Upper-Face-Treatment.png",
      afterImage: "/images/gallery/Upper-Face-Treatment-1.png",
      title: "Upper Face Botox",
      description: "Treatment focused on smoothing forehead lines and crow's feet using Botox, resulting in a more refreshed appearance.",
      category: "botox"
    },
    {
      id: 3,
      beforeImage: "/images/gallery/Before-After_-Facial-Balancing-with-Sculptra-Filler-and-Dysport.png",
      afterImage: "/images/gallery/Before-After_-Facial-Balancing-with-Sculptra-Filler-and-Dysport-1.png",
      title: "Comprehensive Facial Balancing",
      description: "This client received a combination of Sculptra, dermal filler, and Dysport to restore volume, smooth wrinkles, and enhance facial contours.",
      category: "facial-balancing"
    },
    {
      id: 4,
      beforeImage: "/images/gallery/lip-before-10.webp",
      afterImage: "/images/gallery/lip-after-10.webp",
      title: "Natural Lip Enhancement",
      description: "Subtle lip enhancement using hyaluronic acid filler to add volume while maintaining a natural appearance.",
      category: "filler"
    },
    {
      id: 5,
      beforeImage: "/images/gallery/Before-After_-Under-Eye-EZ-Gel.png",
      afterImage: "/images/gallery/Before-After_-Under-Eye-EZ-Gel-1.png",
      title: "Under-Eye Rejuvenation",
      description: "Treatment for under-eye hollows using EZ Gel (PRF) to reduce dark circles and refresh the eye area.",
      category: "prp-prf"
    },
    {
      id: 6,
      beforeImage: "/images/gallery/Crows-Feet-Treatment.png",
      afterImage: "/images/gallery/Crows-Feet-Treatment-1.png",
      title: "Crow's Feet Reduction",
      description: "Botox treatment targeting the crow's feet area to smooth fine lines and wrinkles around the eyes.",
      category: "botox"
    },
    {
      id: 7,
      beforeImage: "/images/gallery/lip-before-3.webp",
      afterImage: "/images/gallery/lip-after-3.webp",
      title: "Full Lip Enhancement",
      description: "Comprehensive lip enhancement focusing on both upper and lower lips to create fuller, more defined lips.",
      category: "filler"
    },
    {
      id: 8,
      beforeImage: "/images/gallery/Masseter-Tox-with-Xeomin.png",
      afterImage: "/images/gallery/Masseter-Tox-with-Xeomin-1.png",
      title: "Jawline Slimming",
      description: "Xeomin treatment in the masseter muscles to slim the jawline and create a more contoured lower face.",
      category: "botox"
    },
    {
      id: 9,
      beforeImage: "/images/gallery/Before-After_-Facial-Balancing-with-Daxxify-and-Filler-2.png",
      afterImage: "/images/gallery/Before-After_-Facial-Balancing-with-Daxxify-and-Filler-3.png",
      title: "Daxxify & Filler Combination",
      description: "Facial balancing treatment using Daxxify (long-lasting neurotoxin) and strategic filler placement to enhance facial harmony.",
      category: "facial-balancing"
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'botox', name: 'Botox & Neurotoxins' },
    { id: 'filler', name: 'Fillers' },
    { id: 'facial-balancing', name: 'Facial Balancing' },
    { id: 'prp-prf', name: 'PRP & PRF' }
  ];

  // Filtered gallery items
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Handle gallery item click
  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <Layout title="Before & After Gallery | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-72 w-full bg-gray-100">
        <Image 
          src="/images/gallery/gallery-hero.jpg" 
          alt="Before & After Gallery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Before & After Gallery</h1>
              <p className="text-white text-lg md:text-xl">
                See the remarkable transformations our clients have experienced with our treatments.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Transformations"
            title="Real Results from Real Clients"
            alignment="center"
          />

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <GalleryItem 
                key={item.id}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                title={item.title}
                description={item.description}
                category={item.category}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No results found for this category.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results Disclaimer</h2>
            <p className="text-gray-700">
              The photos in our gallery showcase actual clients of The Fix Clinic who have provided consent to share their results. 
              Please note that individual results may vary. The specific outcome of any treatment depends on factors including age, 
              skin condition, lifestyle habits, and adherence to post-treatment care recommendations.
            </p>
          </div>
        </Container>
      </section>

      {/* Modal */}
      {selectedItem && (
        <Modal 
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          beforeImage={selectedItem.beforeImage}
          afterImage={selectedItem.afterImage}
          title={selectedItem.title}
          description={selectedItem.description}
        />
      )}
    </Layout>
  );
};

export default GalleryPage;