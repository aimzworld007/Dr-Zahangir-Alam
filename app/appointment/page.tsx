import AppointmentForm from '@/components/AppointmentForm';

export default function AppointmentPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Schedule a Visit</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fill out the form below to request an appointment. We will get back to you to confirm the exact time.
          </p>
        </div>
        
        <AppointmentForm />
      </div>
    </div>
  );
}
