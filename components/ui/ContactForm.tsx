import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';

interface ContactFormProps {
  className?: string;
}

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit the form. Please try again later.');
      }
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Facial Balancing',
    'Botox/Dysport',
    'Fillers',
    'Morpheus8 RF',
    'Facials',
    'Laser Treatments',
    'Weight Loss',
    'IV Therapy',
    'Other',
  ];

  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      {submitSuccess ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-semibold text-primary mb-2">Thank You!</h3>
          <p className="text-gray-700 mb-6">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
          <Button 
            onClick={() => setSubmitSuccess(false)}
            variant="secondary"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                {...register('firstName', { required: 'First name is required' })}
                placeholder="Your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                {...register('lastName', { required: 'Last name is required' })}
                placeholder="Your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  }
                })}
                placeholder="Your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                {...register('phone', { 
                  pattern: {
                    value: /^[0-9()-.\s]+$/,
                    message: 'Invalid phone number',
                  }
                })}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service of Interest
            </label>
            <select
              id="service"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              {...register('service')}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              {...register('message', { required: 'Message is required' })}
              placeholder="How can we help you?"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>
          
          {submitError && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {submitError}
            </div>
          )}
          
          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="min-w-[200px]"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;