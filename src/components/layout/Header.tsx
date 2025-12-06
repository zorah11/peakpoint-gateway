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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import logo from "@/assets/logo.png";

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
    { name: "Postgraduate Diplomas & Master’s Programmes", href: "/programs/postgraduate-masters" },
    { name: "Professional Courses (CPAU)", href: "/programs/professional-cpau" },
    { name: "Short Business Courses", href: "/programs/short-business-courses" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md backdrop-blur-md bg-opacity-95" : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* NOTE: Top contact bar removed per request (email/phone/student portal) */}

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="PeakPoint Logo" className="h-12 w-auto" />
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
              to="/research-coaching"
              className={`px-4 py-2 rounded-md transition-smooth hover:bg-muted ${
                isActive("/research-coaching") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Research & Coaching
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md transition-smooth hover:bg-muted ${
                isActive("/contact") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Contact
            </Link>

            <Button variant="default" size="sm" asChild className="ml-4">
              <Link to="/login">Login</Link>
            </Button>
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
                <div className="px-4">
                  <Button variant="default" size="sm" asChild className="w-full">
                    <Link to="/login">Login</Link>
                  </Button>
                </div>
                <Link to="/" className="text-lg font-medium hover:text-primary transition-smooth">
                  Home
                </Link>
                <Link to="/about" className="text-lg font-medium hover:text-primary transition-smooth">
                  About
                </Link>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-smooth group">
                    Programs
                    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col gap-2 ml-4 mt-2">
                    {programs.map((program) => (
                      <Link
                        key={program.href}
                        to={program.href}
                        className="text-muted-foreground hover:text-primary transition-smooth text-sm py-1"
                      >
                        {program.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
                <Link to="/research-coaching" className="text-lg font-medium hover:text-primary transition-smooth">
                  Research & Coaching
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
