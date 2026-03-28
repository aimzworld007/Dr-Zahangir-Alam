'use client';

import { Activity, Bone, HeartPulse, ShieldPlus } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: 'Orthopedic Consultation',
      description: 'Comprehensive evaluation and diagnosis of musculoskeletal conditions, including joint pain, arthritis, and sports injuries.',
      icon: <Bone className="w-8 h-8 text-blue-600" />,
      color: 'bg-blue-50',
      hoverColor: 'group-hover:bg-blue-600 group-hover:text-white'
    },
    {
      title: 'Trauma Care',
      description: 'Expert management of fractures, dislocations, and other traumatic injuries to bones and joints.',
      icon: <Activity className="w-8 h-8 text-green-600" />,
      color: 'bg-green-50',
      hoverColor: 'group-hover:bg-green-600 group-hover:text-white'
    },
    {
      title: 'Post-Surgical Rehabilitation',
      description: 'Guidance and monitoring for optimal recovery following orthopedic surgical procedures.',
      icon: <HeartPulse className="w-8 h-8 text-rose-600" />,
      color: 'bg-rose-50',
      hoverColor: 'group-hover:bg-rose-600 group-hover:text-white'
    },
    {
      title: 'Preventive Care',
      description: 'Advice and strategies to prevent bone and joint issues, osteoporosis management, and lifestyle modifications.',
      icon: <ShieldPlus className="w-8 h-8 text-purple-600" />,
      color: 'bg-purple-50',
      hoverColor: 'group-hover:bg-purple-600 group-hover:text-white'
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Services & Expertise</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing specialized care in Orthopedics and Trauma to help you regain mobility and live a pain-free life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all group"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${service.hoverColor}`}>
                {/* Clone element to override color on hover */}
                <div className="transition-colors duration-300 group-hover:text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
