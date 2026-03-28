import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are here to help. Reach out to us for any inquiries or to schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-blue-600 mb-6">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600">
              Directorate General of Health Services<br />
              Mohakhali, Banani, Dhaka<br />
              Bangladesh
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-600 mb-6">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
            <p className="text-slate-600 mb-4">
              Call or WhatsApp us for immediate assistance.
            </p>
            <a href="tel:+8801775193265" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
              +880 1775-193265
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-blue-600 mb-6">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600 mb-4">
              Send us an email and we&apos;ll get back to you soon.
            </p>
            <a href="mailto:zahangir.somc@gmail.com" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
              zahangir.somc@gmail.com
            </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-96 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-200">
            {/* Embed Google Maps iframe here in production */}
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
              <MapPin className="h-12 w-12 mb-4 opacity-50" />
              <p className="text-lg font-medium">Interactive Map View</p>
              <p className="text-sm">Mohakhali, Banani, Dhaka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
