import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-background text-primary py-6 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-versailles text-primary">
          <Link href="/">The Fix Clinic</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/" className="font-apfel hover:text-accent transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="font-apfel hover:text-accent transition-colors duration-300">
            About Us
          </Link>
          <Link href="/services" className="font-apfel hover:text-accent transition-colors duration-300">
            Services
          </Link>
          <Link href="/contact" className="font-apfel hover:text-accent transition-colors duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
