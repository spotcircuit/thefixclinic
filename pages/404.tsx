import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <Layout 
      title="Page Not Found" 
      description="The page you are looking for does not exist."
    >
      <section className="py-24 bg-accent">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-4">Page Not Found</h2>
            <p className="text-lg text-dark mb-8">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            <div className="space-x-4">
              <Button href="/" size="lg">
                Return Home
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default NotFoundPage;