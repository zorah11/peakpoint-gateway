import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Users,
  Award,
  BookOpen,
  Globe,
  TrendingUp,
  Calendar,
  ChevronRight,
  Star,
  Clock,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { programs } from "@/lib/programsData";

const Home = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry-relevant curriculum",
      description:
        "Built in consultation with business, professional bodies and employers.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Flexible learning paths",
      description: "Full-time, part-time, weekend, online – shaped for you.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced faculty",
      description: "Practitioners and academics committed to your success.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Entrepreneurial mindset",
      description: "Every programme integrates business, innovation and enterprise readiness.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Support & resources",
      description: "Student services, counselling, career guidance, internships and alumni networks.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location & access",
      description: "Based in Kampala, Uganda, with modern facilities and an expanding global view.",
    },
  ];



  const testimonials = [
    {
      name: "Sarah Johnson",
      program: "MBA Graduate 2023",
      content:
        "Peakpoint transformed my career. The quality of education and networking opportunities are unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      program: "Bachelor of Business 2024",
      content:
        "The faculty's dedication and the modern curriculum prepared me perfectly for the business world.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      program: "Professional Certificate 2023",
      content:
        "A flexible program that allowed me to upskill while working. The investment was worth every penny.",
      rating: 5,
    },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Students collaborating" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">
            Welcome
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Peakpoint Business School
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            At Peakpoint Business School, we believe the journey to success begins with relevant, dynamic and
            industry-aligned education. Whether you are entering the workforce, advancing your professional
            certification, or stepping up to leadership roles, we offer the programmes to empower your next move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroPrimary" size="lg" asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Why Choose Peakpoint (cards) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Peakpoint?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience excellence in business education with our unique advantages
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-smooth hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect program to advance your career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <BookOpen className="h-12 w-12 mb-4 text-secondary" />
                  <h3 className="text-2xl font-bold mb-3">{program.category}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {program.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{program.items[0]?.duration || "Flexible"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{program.items[0]?.mode || "Blended/Online"}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/programs/${program.id}`}>
                      View Details <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>



      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our alumni about their transformative experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Details Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold">Launch Date</h3>
              </div>
              <p className="text-primary-foreground/90">
                January 2026<br />
                <span className="text-sm opacity-75">(pre-enrolment opens Sept 2025)</span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold">Campus Location</h3>
              </div>
              <p className="text-primary-foreground/90">
                Namugongo - Kampala, Uganda<br />
                <span className="text-sm opacity-75">(with blended/online delivery options)</span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold">Admission Info</h3>
              </div>
              <p className="text-primary-foreground/90">
                Visit our website or contact our Admissions Office for entry requirements, fees and scholarships.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold">Contact Us</h3>
              </div>
              <div className="space-y-2 text-primary-foreground/90">

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+256772327732</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+256782996126</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <a href="https://peakpointbusinessschool.com" className="hover:text-secondary">peakpointbusinessschool.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center border-t border-primary-foreground/20 pt-8">
            <p className="mb-4 text-lg">Connect with us for updates and launches</p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://www.linkedin.com/company/peakpoint-business-school/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://www.facebook.com/profile.php?id=61583443073536" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://x.com/peakpointbusscl" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://www.youtube.com/@PeakpointBusinessSchool" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Next Step</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your future starts now. Whether you’re launching a new career, moving up the ladder, or building a
            business – Peakpoint Business School gives you the platform to move further, faster.
          </p>
          <p className="text-lg font-semibold text-primary mb-8">
            Apply now for January 2026 enrolment. Be part of our first intake and set the pace for success.
          </p>
          <p className="text-muted-foreground italic">
            Peakpoint Business School Limited – Empowering you with knowledge, skills and enterprise for the
            world of tomorrow.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of successful graduates who started their business careers at Peakpoint
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
