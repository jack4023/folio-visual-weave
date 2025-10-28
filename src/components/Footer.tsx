import { siteConfig } from '../config/site';

const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
