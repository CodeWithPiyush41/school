import { Shield, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground dark:bg-card dark:border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 inline-flex">
              <Shield className="h-8 w-8 text-accent" />
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Greenfield
              </span>
            </Link>
            <p className="text-primary-foreground/80 dark:text-muted-foreground text-sm leading-relaxed mt-4">
              Empowering minds and building futures since 1999. A prestigious institution blending academic excellence with holistic character development.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Youtube className="h-5 w-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="text-primary-foreground/80 hover:text-accent transition-colors">Academics & Curriculum</Link></li>
              <li><Link href="/admission" className="text-primary-foreground/80 hover:text-accent transition-colors">Admissions 2025-26</Link></li>
              <li><Link href="/events" className="text-primary-foreground/80 hover:text-accent transition-colors">News & Events</Link></li>
              <li><Link href="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">Photo Gallery</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 leading-relaxed">
                  123 Greenfield Road,<br />
                  New Delhi 110001,<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+911112345678" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +91-11-1234-5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@greenfieldacademy.edu" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@greenfieldacademy.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-white">Office Hours</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p className="font-medium text-white mb-1">Monday - Friday</p>
                  <p>8:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5 opacity-0" />
                <div className="text-primary-foreground/80">
                  <p className="font-medium text-white mb-1">Saturday</p>
                  <p>9:00 AM - 1:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <div className="bg-white/10 p-3 rounded-md border border-white/10 text-xs">
                  <span className="text-accent font-semibold block mb-1">Notice:</span>
                  Campus visits are by appointment only during ongoing sessions.
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="border-t border-primary-foreground/10 dark:border-border">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60 dark:text-muted-foreground">
          <p>&copy; {currentYear} Greenfield Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
