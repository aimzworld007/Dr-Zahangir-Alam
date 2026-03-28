import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import AdminDashboard from './AdminDashboard';
import LoginForm from './LoginForm';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');

  if (!session || session.value !== 'authenticated') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-sm border border-slate-100">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-slate-600">
              Please sign in to view appointments
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }

  // Fetch appointments if authenticated
  const appointments = await prisma.appointment.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AdminDashboard initialAppointments={appointments} />
      </div>
    </div>
  );
}
