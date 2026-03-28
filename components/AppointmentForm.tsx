'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { appointmentSchema, AppointmentFormData } from '@/lib/validations/appointment';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function AppointmentForm() {
  const { t } = useLanguage();
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
    <div className="bg-white rounded-[2rem] shadow-lg shadow-black/5 border border-[#dee2e6] p-10 md:p-12">
      <h2 className="text-3xl font-bold text-[#212529] mb-8 font-serif">{t.appointment.title}</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-8 bg-[#f8f9fa] border border-[var(--color-primary)] text-[var(--color-primary)] rounded-2xl p-6 flex items-start shadow-sm">
          <CheckCircle2 className="w-6 h-6 mr-4 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">{t.appointment.form.successTitle}</h3>
            <p className="text-[#6b6b6b] mt-1 font-light">{t.appointment.form.successDesc}</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-8 bg-red-50 border border-red-200 text-red-800 rounded-2xl p-6 flex items-start shadow-sm">
          <AlertCircle className="w-6 h-6 mr-4 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Error</h3>
            <p className="text-red-700 mt-1 font-light">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-[#495057] mb-2">
              {t.appointment.form.name} *
            </label>
            <input
              type="text"
              id="patientName"
              {...register('patientName')}
              className={`w-full rounded-xl border ${errors.patientName ? 'border-red-500' : 'border-[#dee2e6]'} px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300 bg-[#f8f9fa] hover:bg-white`}
              placeholder={t.appointment.form.namePlaceholder}
            />
            {errors.patientName && <p className="mt-2 text-sm text-red-500">{errors.patientName.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#495057] mb-2">
              {t.appointment.form.phone} *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className={`w-full rounded-xl border ${errors.phone ? 'border-red-500' : 'border-[#dee2e6]'} px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300 bg-[#f8f9fa] hover:bg-white`}
              placeholder={t.appointment.form.phonePlaceholder}
            />
            {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#495057] mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full rounded-xl border ${errors.email ? 'border-red-500' : 'border-[#dee2e6]'} px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300 bg-[#f8f9fa] hover:bg-white`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="dateTime" className="block text-sm font-medium text-[#495057] mb-2">
              {t.appointment.form.date} *
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              {...register('dateTime')}
              className={`w-full rounded-xl border ${errors.dateTime ? 'border-red-500' : 'border-[#dee2e6]'} px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300 bg-[#f8f9fa] hover:bg-white`}
            />
            {errors.dateTime && <p className="mt-2 text-sm text-red-500">{errors.dateTime.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="problemDescription" className="block text-sm font-medium text-[#495057] mb-2">
            {t.appointment.form.message} *
          </label>
          <textarea
            id="problemDescription"
            rows={5}
            {...register('problemDescription')}
            className={`w-full rounded-xl border ${errors.problemDescription ? 'border-red-500' : 'border-[#dee2e6]'} px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300 bg-[#f8f9fa] hover:bg-white resize-none`}
            placeholder={t.appointment.form.messagePlaceholder}
          ></textarea>
          {errors.problemDescription && <p className="mt-2 text-sm text-red-500">{errors.problemDescription.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center py-4 px-6 rounded-xl shadow-md shadow-[var(--color-primary)]/20 text-lg font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-3 h-6 w-6" />
              {t.appointment.form.submitting}
            </>
          ) : (
            t.appointment.form.submit
          )}
        </button>
      </form>
    </div>
  );
}
