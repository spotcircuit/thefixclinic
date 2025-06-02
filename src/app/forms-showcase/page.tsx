import React from 'react';
import Label from '@/components/forms/Label';
import Input from '@/components/forms/Input';
import Textarea from '@/components/forms/Textarea';
import Select from '@/components/forms/Select';
import Button from '@/components/Button'; // Re-use existing button
import Header from '@/components/Header'; // To make page look 'normal'

const FormsShowcasePage = () => {
  return (
    <>
      {/* <Header /> */} {/* Commenting out Header to avoid issues if it's not using 'use client' yet for state */}
      <div className="bg-background min-h-screen py-10">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-versailles text-primary mb-12 text-center">
            Form Elements Showcase
          </h1>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl space-y-6">
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

            <div className="pt-4 space-x-4">
              <Button variant="primary" type="submit" onClick={(e) => e.preventDefault()}>
                Submit Primary
              </Button>
              <Button variant="secondary" type="button">
                Cancel Secondary
              </Button>
            </div>
          </div>

          {/* Example of an Input with an error state (conceptual) */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl space-y-6 mt-12">
            <h2 className="text-2xl font-apfel font-semibold text-primary mb-4">Error State Example</h2>
            <div>
              <Label htmlFor="emailError" className="text-red-600">Email with Error</Label>
              <Input 
                type="email" 
                id="emailError" 
                placeholder="jane.doe@example.com" 
                defaultValue="invalid-email"
                className="border-red-500 focus:border-red-500 focus:ring-red-500/50" 
              />
              <p className="text-sm text-red-600 mt-1 font-apfel">Please enter a valid email address.</p>
            </div>
             <div>
              <Label htmlFor="textareaError" className="text-red-600">Textarea with Error</Label>
              <Textarea 
                id="textareaError" 
                placeholder="Your message here..."
                className="border-red-500 focus:border-red-500 focus:ring-red-500/50" 
              />
              <p className="text-sm text-red-600 mt-1 font-apfel">This field cannot be empty.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsShowcasePage;
