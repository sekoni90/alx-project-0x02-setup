// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-lg font-bold">{title ?? 'ALX Project'}</h1>
        <nav className="flex gap-6">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/posts" className="hover:underline">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;