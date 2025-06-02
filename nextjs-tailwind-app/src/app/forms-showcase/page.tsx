"use client";

import React from 'react';
import Label from '../../../src/components/forms/Label';
import Input from '../../../src/components/forms/Input';
import Textarea from '../../../src/components/forms/Textarea';
import Select from '../../../src/components/forms/Select';
import Button from '../../../src/components/Button';
import Image from 'next/image';

const FormsShowcasePage = () => {
  const placeholderImageUrl = 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; 

  return (
    <>
      <div className="bg-background min-h-screen py-8 sm:py-10"> {/* Adjusted page padding */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8"> {/* Adjusted container padding */}
          <h1 className="text-3xl sm:text-4xl font-versailles text-primary mb-8 sm:mb-12 text-center"> {/* Responsive title */}
            Form Elements & Image Hover Showcase
          </h1>

          {/* Form Elements Section */}
          <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-xl space-y-6 mb-12 sm:mb-16"> {/* Adjusted max-width & padding */}
            <h2 className="text-2xl sm:text-3xl font-versailles text-primary mb-6 text-center">Form Controls</h2> {/* Responsive title */}
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input type="text" id="fullName" placeholder="Jane Doe" />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" id="email" placeholder="jane.doe@example.com" />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="••••••••" />
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Select id="country">
                <option value="">Select a country...</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="disabledInput">Disabled Input</Label>
              <Input type="text" id="disabledInput" placeholder="Cannot edit" disabled />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message here..." />
            </div>
            
            <div>
              <Label htmlFor="disabledTextarea">Disabled Textarea</Label>
              <Textarea id="disabledTextarea" placeholder="Cannot edit this either" disabled />
            </div>

            <div className="pt-4 space-x-3 sm:space-x-4 flex flex-wrap justify-start gap-y-3"> {/* Adjusted spacing, wrap, gap */}
              <Button variant="primary" type="submit" onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()} className="text-sm sm:text-base"> {/* Responsive button text */}
                Submit Primary
              </Button>
              <Button variant="secondary" type="button" className="text-sm sm:text-base"> {/* Responsive button text */}
                Cancel Secondary
              </Button>
            </div>
          </div>

          {/* Error State Example Section */}
          <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-xl space-y-6 mb-12 sm:mb-16"> {/* Adjusted max-width & padding */}
            <h2 className="text-xl sm:text-2xl font-apfel font-semibold text-primary mb-4">Error State Example</h2> {/* Responsive title */}
            <div>
              <Label htmlFor="emailError" className="text-red-600">Email with Error</Label>
              <Input 
                type="email" 
                id="emailError" 
                placeholder="jane.doe@example.com" 
                defaultValue="invalid-email"
                className="border-red-500 focus:border-red-500 focus:ring-red-500/50" 
              />
              <p className="text-xs sm:text-sm text-red-600 mt-1 font-apfel">Please enter a valid email address.</p> {/* Responsive error text */}
            </div>
             <div>
              <Label htmlFor="textareaError" className="text-red-600">Textarea with Error</Label>
              <Textarea 
                id="textareaError" 
                placeholder="Your message here..."
                className="border-red-500 focus:border-red-500 focus:ring-red-500/50" 
              />
              <p className="text-xs sm:text-sm text-red-600 mt-1 font-apfel">This field cannot be empty.</p> {/* Responsive error text */}
            </div>
          </div>

          {/* Image Hover Effect Showcase Section */}
          <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-xl space-y-6"> {/* Adjusted max-width & padding */}
            <h2 className="text-2xl sm:text-3xl font-versailles text-primary mb-6 text-center">Image Hover Effect</h2> {/* Responsive title */}
            <p className="text-center font-apfel text-gray-700 mb-6 text-sm sm:text-base"> {/* Responsive text */}
              Hover over the image below to see the defined subtle hover effect (scale and opacity change). 
              This uses the <code>.interactive-image-hover</code> and <code>.image-target</code> classes.
              The container also has <code>.interactive-image-container</code> for <code>overflow-hidden</code>.
            </p>
            <a href="#" className="block w-full md:w-3/4 lg:w-1/2 mx-auto interactive-image-hover interactive-image-container rounded-lg shadow-md">
              <Image 
                src={placeholderImageUrl} 
                alt="Interactive Placeholder Image" 
                width={600}
                height={400}
                layout="responsive"
                className="image-target rounded-lg"
              />
            </a>
            <p className="text-center font-apfel text-gray-600 text-xs sm:text-sm mt-4"> {/* Responsive text */}
              The above image is wrapped in an `&lt;a&gt;` tag. The container `&lt;a&gt;` tag has `.interactive-image-hover` and `.interactive-image-container`. The `&lt;img&gt;` tag has `.image-target`.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default FormsShowcasePage;
