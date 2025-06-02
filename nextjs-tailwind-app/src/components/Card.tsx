"use client";

import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  const baseStyles = 'bg-white p-6 md:p-8 rounded-lg shadow-lg'; // Using shadow-lg for a bit more depth

  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}

/*
// Example Usage:
const App = () => (
  <div className="bg-brand-cream p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card className="col-span-1">
      <h3 className="text-xl font-versailles text-primary mb-2">Card Title 1</h3>
      <p className="font-apfel text-gray-700">
        This is some content within the first card. It's flexible and can hold any elements.
      </p>
    </Card>
    <Card className="col-span-1">
      <h3 className="text-xl font-versailles text-primary mb-2">Card Title 2</h3>
      <p className="font-apfel text-gray-700">
        Another card with different content, demonstrating the flexibility provided by children.
      </p>
      <Button variant="primary" className="mt-4">Learn More</Button>
    </Card>
    <Card className="col-span-1">
      <img src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Placeholder" className="rounded-md mb-4 h-40 w-full object-cover" />
      <h3 className="text-xl font-versailles text-primary mb-2">Image Card</h3>
      <p className="font-apfel text-gray-700">
        This card includes an image.
      </p>
    </Card>
  </div>
);
*/
