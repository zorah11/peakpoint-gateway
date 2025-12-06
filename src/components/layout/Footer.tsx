import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="PeakPoint Logo" className="h-10 w-auto bg-white rounded-md p-1" />
              <div>
                <h2 className="text-lg font-bold">PEAKPOINT</h2>
                <p className="text-xs text-primary-foreground/70">Business School</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Empowering Professionals
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary-foreground/10" asChild>
                <a href="https://www.facebook.com/profile.php?id=61583443073536" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary-foreground/10" asChild>
                <a href="https://x.com/peakpointbusscl" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary-foreground/10" asChild>
                <a href="https://www.linkedin.com/company/peakpoint-business-school/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary-foreground/10" asChild>
                <a href="https://www.youtube.com/@PeakpointBusinessSchool" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/about" className="hover:text-secondary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-secondary transition-smooth">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-secondary transition-smooth">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/programs/postgraduate-masters" className="hover:text-secondary transition-smooth">
                  Postgraduate & Masters
                </Link>
              </li>
              <li>
                <Link to="/programs/professional-cpau" className="hover:text-secondary transition-smooth">
                  Professional Courses
                </Link>
              </li>
              <li>
                <Link to="/programs/short-business-courses" className="hover:text-secondary transition-smooth">
                  Short Business Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Namugongo - Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+256772327732</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+256782996126</span>
              </li>

              <li className="flex items-center gap-2">
                <span>🌐</span>
                <a href="https://peakpointbusinessschool.com" className="hover:text-secondary">peakpointbusinessschool.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Peakpoint Business School. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-secondary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-secondary transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
