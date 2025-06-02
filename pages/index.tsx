import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import AwardsSection from '../components/home/AwardsSection';
import AboutSection from '../components/home/AboutSection';
import TreatmentsSection from '../components/home/TreatmentsSection';
import StatsSection from '../components/home/StatsSection';
import FounderSection from '../components/home/FounderSection';
import ReviewsSection from '../components/home/ReviewsSection';
import ImageGallerySection from '../components/home/ImageGallerySection';
import CallToActionSection from '../components/home/CallToActionSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AwardsSection />
      <AboutSection />
      <TreatmentsSection />
      <StatsSection />
      <FounderSection />
      <ReviewsSection />
      <ImageGallerySection />
      <CallToActionSection />
    </Layout>
  );
}