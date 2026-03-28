import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Stethoscope, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Accepting New Patients
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dr. Md. Jahangir Alam <br />
                <span className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 block">
                  (মোঃ জাহাঙ্গীর আলম)
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Assistant Surgeon / Medical Officer specializing in Orthopedic & Trauma Care. Dedicated to providing compassionate and expert medical care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all hover:shadow-md"
                >
                  Book Appointment
                  <Calendar className="ml-2 -mr-1 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-green-100 rounded-full blur-3xl opacity-50 transform scale-110"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] max-w-md mx-auto">
                {/* Placeholder for Doctor's Photo */}
                <Image
                  src="https://picsum.photos/seed/doctor/800/1000"
                  alt="Dr. Md. Jahangir Alam"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">Specialized in Orthopedic Surgery and Trauma Care with years of dedicated training.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualified</h3>
              <p className="text-gray-600">MBBS from Sylhet MAG Osmani Medical College, MS in Orthopedic Surgery (Study Deputation).</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-gray-600">Schedule your consultation easily through our online booking system or WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
