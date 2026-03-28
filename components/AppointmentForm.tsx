'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { appointmentSchema, AppointmentFormData } from '@/lib/validations/appointment';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Format the message for WhatsApp
      const message = `*New Appointment Request*
Name: ${data.patientName}
Phone: ${data.phone}
${data.email ? `Email: ${data.email}\n` : ''}Date & Time: ${new Date(data.dateTime).toLocaleString()}
Problem: ${data.problemDescription}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/8801775193265?text=${encodedMessage}`;

      // Simulate a brief delay for UX
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      reset();
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Book an Appointment</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-start">
          <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Redirecting to WhatsApp!</h3>
            <p className="text-sm mt-1">Please send the pre-filled message to confirm your appointment request.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 flex items-start">
          <AlertCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Error</h3>
            <p className="text-sm mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-slate-700 mb-1">
              Patient Name *
            </label>
            <input
              type="text"
              id="patientName"
              {...register('patientName')}
              className={`w-full rounded-md border ${errors.patientName ? 'border-red-500' : 'border-slate-300'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Full Name"
            />
            {errors.patientName && <p className="mt-1 text-sm text-red-500">{errors.patientName.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className={`w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-slate-300'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="e.g., 01775193265"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-slate-300'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="dateTime" className="block text-sm font-medium text-slate-700 mb-1">
              Preferred Date & Time *
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              {...register('dateTime')}
              className={`w-full rounded-md border ${errors.dateTime ? 'border-red-500' : 'border-slate-300'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.dateTime && <p className="mt-1 text-sm text-red-500">{errors.dateTime.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="problemDescription" className="block text-sm font-medium text-slate-700 mb-1">
            Problem Description *
          </label>
          <textarea
            id="problemDescription"
            rows={4}
            {...register('problemDescription')}
            className={`w-full rounded-md border ${errors.problemDescription ? 'border-red-500' : 'border-slate-300'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Please briefly describe your symptoms or reason for visit..."
          ></textarea>
          {errors.problemDescription && <p className="mt-1 text-sm text-red-500">{errors.problemDescription.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
              Redirecting...
            </>
          ) : (
            'Book via WhatsApp'
          )}
        </button>
      </form>
    </div>
  );
}
