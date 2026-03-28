import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { appointmentSchema } from '@/lib/validations/appointment';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = appointmentSchema.parse(body);

    // Create appointment in database
    const appointment = await prisma.appointment.create({
      data: {
        patientName: validatedData.patientName,
        phone: validatedData.phone,
        email: validatedData.email || null,
        dateTime: new Date(validatedData.dateTime),
        problemDescription: validatedData.problemDescription,
      },
    });

    return NextResponse.json(
      { message: 'Appointment booked successfully', appointment },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
