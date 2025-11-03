import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  GraduationCap,
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
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import campusImage from "@/assets/campus-image.jpg";

const Home = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Accredited Programs",
      description: "Internationally recognized degrees and certifications",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Faculty",
      description: "Learn from industry leaders and academic experts",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Network",
      description: "Connect with students and alumni worldwide",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Success",
      description: "95% employment rate within 6 months of graduation",
    },
  ];

  const programs = [
    {
      title: "Undergraduate Programs",
      description: "Build a strong foundation in business fundamentals",
      duration: "3-4 years",
      mode: "Full-time",
      href: "/programs/undergraduate",
    },
    {
      title: "Masters Programs",
      description: "Advanced business education for career advancement",
      duration: "1-2 years",
      mode: "Full-time / Part-time",
      href: "/programs/masters",
    },
    {
      title: "Professional Courses",
      description: "Specialized skills for working professionals",
      duration: "3-12 months",
      mode: "Flexible",
      href: "/programs/professional",
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

  const upcomingEvents = [
    {
      title: "Open Day 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus",
    },
    {
      title: "Business Leaders Summit",
      date: "March 22, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Conference Hall",
    },
    {
      title: "Career Fair",
      date: "April 5, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Sports Complex",
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
            Ranked #1 Business School 2024
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Shape Your Future at Peakpoint Business School
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            World-class business education designed for tomorrow's leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/apply">
                Apply Now <ChevronRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="heroPrimary" size="lg" asChild>
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Peakpoint */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Peakpoint?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience excellence in business education with our unique advantages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="pt-6">
                  <BookOpen className="h-12 w-12 mb-4 text-secondary" />
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{program.mode}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={program.href}>
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Campus Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">Our Campus</Badge>
              <h2 className="text-4xl font-bold mb-6">State-of-the-Art Facilities</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our modern campus provides the perfect environment for learning, collaboration, and innovation. With
                cutting-edge facilities and resources, students have everything they need to succeed.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Modern classrooms with advanced technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Extensive digital library and research facilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Collaborative workspaces and lounges</span>
                </li>
              </ul>
              <Button variant="secondary" asChild>
                <Link to="/about">Take a Virtual Tour</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <img src={campusImage} alt="Campus building" className="w-full h-full object-cover" />
            </div>
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

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us for exciting campus events and opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
