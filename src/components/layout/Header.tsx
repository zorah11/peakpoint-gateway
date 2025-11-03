import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programs = [
    { name: "Undergraduate Programs", href: "/programs/undergraduate" },
    { name: "Masters Programs", href: "/programs/masters" },
    { name: "Professional Courses", href: "/programs/professional" },
    { name: "Vocational Training", href: "/programs/vocational" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md backdrop-blur-md bg-opacity-95" : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 border-b border-border">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>📧 admissions@peakpoint.edu</span>
            <span>📞 +1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/student-portal">Student Portal</Link>
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PEAKPOINT</h1>
              <p className="text-xs text-muted-foreground">Business School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md transition-smooth hover:bg-muted ${
                isActive("/") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-md transition-smooth hover:bg-muted ${
                isActive("/about") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              About
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Programs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[400px] bg-popover">
                      {programs.map((program) => (
                        <li key={program.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={program.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-smooth hover:bg-accent hover:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{program.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/admissions"
              className={`px-4 py-2 rounded-md transition-smooth hover:bg-muted ${
                isActive("/admissions") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Admissions
            </Link>

            <Link
              to="/student-life"
              className={`px-4 py-2 rounded-md transition-smooth hover:bg-muted ${
                isActive("/student-life") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Student Life
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md transition-smooth hover:bg-muted ${
                isActive("/contact") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary transition-smooth">
                  Home
                </Link>
                <Link to="/about" className="text-lg font-medium hover:text-primary transition-smooth">
                  About
                </Link>
                <div>
                  <p className="text-lg font-medium mb-2">Programs</p>
                  <div className="flex flex-col gap-2 ml-4">
                    {programs.map((program) => (
                      <Link
                        key={program.href}
                        to={program.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {program.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link to="/admissions" className="text-lg font-medium hover:text-primary transition-smooth">
                  Admissions
                </Link>
                <Link to="/student-life" className="text-lg font-medium hover:text-primary transition-smooth">
                  Student Life
                </Link>
                <Link to="/contact" className="text-lg font-medium hover:text-primary transition-smooth">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
