import React, { useEffect } from 'react';
import { initTestimonialsCarousel } from '../scripts/index.js';

const TestimonialsSection = () => {
  useEffect(() => {
    // Initialize the testimonials carousel when the component mounts
    initTestimonialsCarousel();
    
    // Clean up function if needed
    return () => {
      // Any cleanup code if necessary
    };
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-amc-turquoise font-medium">What People Say</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-amc-turquoise mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Read what our satisfied customers have to say about their experience with AMC Microfinance.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div id="testimonials-carousel" className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {/* Testimonial Slides - Replace with actual data */}
              <li className="splide__slide">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 italic mb-4">"AMC helped me grow my small business with their flexible loan options. I highly recommend them!"</p>
                  <p className="font-medium">- Fatima Al-Zahra</p>
                </div>
              </li>
              <li className="splide__slide">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 italic mb-4">"The digital services provided by AMC made managing my finances so much easier. Thank you!"</p>
                  <p className="font-medium">- Ahmed Khaled</p>
                </div>
              </li>
              <li className="splide__slide">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 italic mb-4">"I was able to achieve my personal goals with the help of AMC's individual loan. Great service!"</p>
                  <p className="font-medium">- Layla Mohammed</p>
                </div>
              </li>
              {/* Add more testimonials here */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
