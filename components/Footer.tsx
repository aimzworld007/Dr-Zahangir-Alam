import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Md. Jahangir Alam</h3>
            <p className="text-gray-400 mb-4">
              Assistant Surgeon / Medical Officer<br />
              Orthopedic & Trauma Care Specialist
            </p>
            <div className="flex space-x-4">
              {/* Social links could go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/appointment" className="text-gray-400 hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Directorate General of Health Services, Mohakhali, Banani, Dhaka</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <a href="tel:+8801775193265" className="text-gray-400 hover:text-white transition-colors">+880 1775-193265</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <a href="mailto:zahangir.somc@gmail.com" className="text-gray-400 hover:text-white transition-colors">zahangir.somc@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Md. Jahangir Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
