
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amc-dark text-white">
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About AMC</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                Our Vision
              </Link>
            </li>
            <li>
              <Link to="/about/board" className="text-gray-300 hover:text-white transition-colors">
                Board of Directors
              </Link>
            </li>
            <li>
              <Link to="/about/reports" className="text-gray-300 hover:text-white transition-colors">
                Management Report
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                Products and Services
              </Link>
            </li>
            <li>
              <Link to="/fees" className="text-gray-300 hover:text-white transition-colors">
                Pricing and Fees List
              </Link>
            </li>
            <li>
              <Link to="/branches" className="text-gray-300 hover:text-white transition-colors">
                Branches
              </Link>
            </li>
            <li>
              <Link to="/governance" className="text-gray-300 hover:text-white transition-colors">
                Corporate Governance
              </Link>
            </li>
            <li>
              <Link to="/instructions" className="text-gray-300 hover:text-white transition-colors">
                Central Bank of Jordan Instructions
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Media Center</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                News
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="text-gray-300 hover:text-white transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                Video Gallery
              </Link>
            </li>
            <li>
              <Link to="/csr" className="text-gray-300 hover:text-white transition-colors">
                Corporate Social Responsibility
              </Link>
            </li>
            <li>
              <Link to="/financial" className="text-gray-300 hover:text-white transition-colors">
                Non-Financial Services
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact us
              </Link>
            </li>
            <li>
              <a href="mailto:info@amc.com.jo" className="text-gray-300 hover:text-white transition-colors">
                Email: info@amc.com.jo
              </a>
            </li>
            <li>
              <Link to="/complaints" className="text-gray-300 hover:text-white transition-colors">
                Customer Complaints Channels
              </Link>
            </li>
            <li>
              <Link to="/consultant" className="text-gray-300 hover:text-white transition-colors">
                Apply a Consultant
              </Link>
            </li>
            <li>
              <Link to="/vacancies" className="text-gray-300 hover:text-white transition-colors">
                Vacancies
              </Link>
            </li>
            <li>
              <Link to="/job-application" className="text-gray-300 hover:text-white transition-colors">
                Job Application
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                Site Map
              </Link>
            </li>
            <li>
              <Link to="/marketing" className="text-gray-300 hover:text-white transition-colors">
                Marketing specialists and materials
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://youtube.com" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://wa.me/9667500830" className="text-gray-300 hover:text-white transition-colors" aria-label="WhatsApp">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Central Bank of Jordan" 
              className="max-h-20 w-auto mb-4" 
            />
            <p className="text-sm text-gray-300">
              Ahli Microfinance Company is under the supervision of the Central Bank of Jordan
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-black/20 py-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-2 md:mb-0">
            Copyright © {new Date().getFullYear()} Ahli Microfinance Company. All rights reserved.
          </p>
          <div className="flex items-center">
            <button 
              className="p-2 rounded-full bg-amc-teal text-white hover:bg-amc-turquoise transition-colors" 
              aria-label="Accessibility options"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
