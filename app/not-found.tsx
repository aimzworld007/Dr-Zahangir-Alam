import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa]">
      <h2 className="text-4xl font-bold text-[#212529] mb-4 font-serif">404 - Page Not Found</h2>
      <p className="text-[#6b6b6b] mb-8">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
