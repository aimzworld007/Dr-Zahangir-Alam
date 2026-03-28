import { z } from 'zod';

export const appointmentSchema = z.object({
  patientName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  dateTime: z.string().min(1, 'Please select a date and time'),
  problemDescription: z.string().min(10, 'Please provide more details about your problem'),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
