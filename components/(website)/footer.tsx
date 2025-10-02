"use client"

import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const PRIMARY_COLOR = "#00A5D4";

const Footer = () => {
  const locations = [
    { name: "Civil Road, Rohtak", phone: "9797973300" },
    { name: "Medical Mod, Rohtak", phone: "9797973300" },
    { name: "Medanta Road, Gurugram", phone: "8000775100" },
  ];

  const quickLinks = [
    "Home",
    "About Us",
    "Blog",
    "Gallery",
    "Contact",
  ];

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <style>
        {`
          .footer-primary {
            color: ${PRIMARY_COLOR} !important;
          }
          .footer-primary-bg {
            background-color: ${PRIMARY_COLOR}1A !important; /* 10% opacity */
          }
          .footer-primary-bg-hover:hover {
            background-color: ${PRIMARY_COLOR}33 !important; /* 20% opacity */
          }
          .footer-link-hover:hover {
            color: ${PRIMARY_COLOR} !important;
          }
        `}
      </style>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Narula Diagnostics</h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Leading diagnostic centre serving patients since 1952 with state-of-the-art
              technology and expert care.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a href="#" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center footer-primary-bg footer-primary-bg-hover transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 footer-primary" />
              </a>
              <a href="#" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center footer-primary-bg footer-primary-bg-hover transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 footer-primary" />
              </a>
              <a href="#" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center footer-primary-bg footer-primary-bg-hover transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 footer-primary" />
              </a>
              <a href="#" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center footer-primary-bg footer-primary-bg-hover transition-colors">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5 footer-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground transition-colors footer-link-hover text-sm sm:text-base"
                    style={{}}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Our Locations</h3>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 footer-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">{location.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{location.phone}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 footer-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@naruladiagnostics.com"
                  className="text-muted-foreground transition-colors footer-link-hover text-xs sm:text-sm break-all"
                  style={{}}
                >
                  info@naruladiagnostics.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 footer-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:8000775100"
                  className="text-muted-foreground transition-colors footer-link-hover text-xs sm:text-sm"
                  style={{}}
                >
                  8000775100 (Gurugram)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 footer-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:9797973300"
                  className="text-muted-foreground transition-colors footer-link-hover text-xs sm:text-sm"
                  style={{}}
                >
                  9797973300 (Rohtak)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 sm:pt-8 text-center text-muted-foreground">
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Narula Diagnostics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  
