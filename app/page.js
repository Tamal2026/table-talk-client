// app/page.jsx or app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="text-blue-500 hover:text-blue-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-500 hover:text-blue-700">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <p className="text-red-500">
        Welcome to the homepage! This is where you can find the latest updates and news.
      </p>
    </main>
  );
}
