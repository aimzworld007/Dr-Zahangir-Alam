import { Activity, Bone, HeartPulse, ShieldPlus } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Orthopedic Consultation',
      description: 'Comprehensive evaluation and diagnosis of musculoskeletal conditions, including joint pain, arthritis, and sports injuries.',
      icon: <Bone className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Trauma Care',
      description: 'Expert management of fractures, dislocations, and other traumatic injuries to bones and joints.',
      icon: <Activity className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Post-Surgical Rehabilitation',
      description: 'Guidance and monitoring for optimal recovery following orthopedic surgical procedures.',
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Preventive Care',
      description: 'Advice and strategies to prevent bone and joint issues, osteoporosis management, and lifestyle modifications.',
      icon: <ShieldPlus className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Services & Expertise</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing specialized care in Orthopedics and Trauma to help you regain mobility and live a pain-free life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
