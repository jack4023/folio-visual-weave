import { Link, NavLink } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Github, Twitter } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">{siteConfig.name}</Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
