# Dr. Md. Jahangir Alam - Personal Portfolio

A modern, responsive personal portfolio and appointment booking website for Dr. Md. Jahangir Alam, built with Next.js (App Router), Tailwind CSS, and Prisma.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Prisma with SQLite (can be easily migrated to PostgreSQL)
- **Form Validation:** React Hook Form + Zod
- **Icons:** Lucide React

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   *Note: The default admin password is set to `admin` in the `.env` file.*

3. **Database Setup**
   Run the following commands to generate the Prisma client and push the schema to the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- **Responsive Design:** Mobile-first approach using Tailwind CSS.
- **Appointment Booking:** Patients can book appointments through a validated form.
- **Admin Panel:** Secure login (`/admin`) to view and manage appointment requests.
- **WhatsApp Integration:** Floating button for direct WhatsApp communication.
- **SEO Optimized:** Meta tags and semantic HTML structure.

## Migrating to PostgreSQL
To use PostgreSQL instead of SQLite:
1. Open `prisma/schema.prisma`.
2. Change the provider in the `datasource` block:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
3. Update the `DATABASE_URL` in your `.env` file to point to your PostgreSQL instance.
4. Run `npx prisma db push` to apply the schema to the new database.
