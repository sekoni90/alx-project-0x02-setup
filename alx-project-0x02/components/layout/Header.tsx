// components/layout/Header.tsx
import Link from 'next/link';
import { HeaderProps } from '../../interfaces';

const Header: React.FC<HeaderProps> = ({ title = 'ALX Project' }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-semibold cursor-pointer">{title}</span>
        </Link>
        <nav className="text-sm space-x-4">
          <Link href="/home" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;