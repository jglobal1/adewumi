import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter, BookOpen } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <img src="/logo.png" alt="The Leaders' Guide" className="h-10 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              Build teams, systems, and companies that scale without you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Business Coaching</li>
              <li className="text-sm text-primary-foreground/80">Leadership Development</li>
              <li className="text-sm text-primary-foreground/80">Team Building</li>
              <li className="text-sm text-primary-foreground/80">Systems Design</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://selar.com/m/adewumi-adeyanju1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  View All Products on Selar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <a href="tel:+2347060535490" className="hover:text-accent transition-colors">
                  +234 706 053 5490
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@reworkbusinesshub.com" className="hover:text-accent transition-colors">
                  hello@reworkbusinesshub.com
                </a>
              </li>
              <li className="flex gap-3 mt-4">
                <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Rework Business Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
