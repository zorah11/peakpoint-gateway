import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter for the latest news, events, and opportunities
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold">PEAKPOINT</h2>
                <p className="text-xs text-primary-foreground/70">Business School</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Empowering future business leaders with excellence in education and innovation.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary-foreground/10">
                <Youtube className="h-4 w-4" />
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
                <Link to="/admissions" className="hover:text-secondary transition-smooth">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-secondary transition-smooth">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/student-life" className="hover:text-secondary transition-smooth">
                  Student Life
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
                <Link to="/programs/undergraduate" className="hover:text-secondary transition-smooth">
                  Undergraduate
                </Link>
              </li>
              <li>
                <Link to="/programs/masters" className="hover:text-secondary transition-smooth">
                  Masters
                </Link>
              </li>
              <li>
                <Link to="/programs/professional" className="hover:text-secondary transition-smooth">
                  Professional Courses
                </Link>
              </li>
              <li>
                <Link to="/programs/vocational" className="hover:text-secondary transition-smooth">
                  Vocational Training
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
                <span>123 Education Boulevard<br />Business District, ED 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>admissions@peakpoint.edu</span>
              </li>
              <li className="text-primary-foreground/60">
                Office Hours: Mon-Fri, 8am-6pm
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
