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
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Narula Diagnostics</h3>
            <p className="text-muted-foreground mb-4">
              Leading diagnostic centre serving patients since 1952 with state-of-the-art
              technology and expert care.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center footer-primary-bg footer-primary-bg-hover transition-colors">
                <Facebook className="h-5 w-5 footer-primary" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center footer-primary-bg footer-primary-bg-hover transition-colors">
                <Instagram className="h-5 w-5 footer-primary" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center footer-primary-bg footer-primary-bg-hover transition-colors">
                <Linkedin className="h-5 w-5 footer-primary" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center footer-primary-bg footer-primary-bg-hover transition-colors">
                <Youtube className="h-5 w-5 footer-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground transition-colors footer-link-hover"
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
            <h3 className="text-xl font-bold mb-4">Our Locations</h3>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 footer-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{location.name}</p>
                    <p className="text-sm text-muted-foreground">{location.phone}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 footer-primary" />
                <a
                  href="mailto:info@naruladiagnostics.com"
                  className="text-muted-foreground transition-colors footer-link-hover"
                  style={{}}
                >
                  info@naruladiagnostics.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 footer-primary" />
                <a
                  href="tel:8000775100"
                  className="text-muted-foreground transition-colors footer-link-hover"
                  style={{}}
                >
                  8000775100 (Gurugram)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 footer-primary" />
                <a
                  href="tel:9797973300"
                  className="text-muted-foreground transition-colors footer-link-hover"
                  style={{}}
                >
                  9797973300 (Rohtak)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Narula Diagnostics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  
