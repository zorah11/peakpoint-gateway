import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, Target, TrendingUp, Heart, MapPin, BookOpen, Calendar } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "Commitment to the highest standards in education",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Building strong partnerships and teamwork",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Innovation",
      description: "Embracing change and creative thinking",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Integrity",
      description: "Upholding ethical standards in all we do",
    },
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence" },
    { number: "15,000+", label: "Alumni Worldwide" },
    { number: "95%", label: "Employment Rate" },
    { number: "50+", label: "Industry Partners" },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">Established 1999</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Peakpoint Business School</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Building tomorrow's business leaders through innovative education, practical experience, and global
            perspective
          </p>
        </div>
      </section>

      {/* Mission, Vision & Slogan */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-secondary transition-smooth">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 mb-4 text-secondary" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To provide world-class business education that empowers students with the knowledge, skills, and
                  ethical foundation needed to excel in today's dynamic global business environment.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-smooth">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 mb-4 text-secondary" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be recognized globally as a leading business school that shapes the future of business through
                  transformative education, cutting-edge research, and meaningful industry partnerships.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-smooth">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 mb-4 text-secondary" />
                <h2 className="text-2xl font-bold mb-4">Our Slogan</h2>
                <p className="text-xl font-semibold text-primary italic">
                  "Empowering Business Leaders of Tomorrow"
                </p>
                <p className="text-muted-foreground mt-2">
                  We believe in the potential of every student to make a significant impact in the business world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 1999, Peakpoint Business School began with a vision to create a new standard in business
                education. What started as a small institution with 50 students has grown into a globally recognized
                center of excellence, serving thousands of students from over 80 countries.
              </p>
              <p>
                Over the past 25 years, we have continuously evolved our programs to meet the changing needs of the
                business world. Our commitment to innovation, combined with our strong foundation in business
                fundamentals, has made us a preferred choice for aspiring business leaders worldwide.
              </p>
              <p>
                Today, Peakpoint stands as a testament to quality education, boasting a network of over 15,000 alumni
                who hold leadership positions in Fortune 500 companies, successful startups, and influential
                organizations across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Peakpoint (cards) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Peakpoint?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our programmes and services are designed to give you a competitive edge.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Award className="h-6 w-6" />,
                title: "Industry-relevant curriculum",
                description: "Built in consultation with business, professional bodies and employers.",
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
                description:
                  "Every programme integrates business, innovation and enterprise readiness.",
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
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-secondary transition-smooth text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit mx-auto text-primary">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-smooth text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit mx-auto text-primary">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Celebrating milestones and successes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2 text-secondary">{achievement.number}</div>
                <div className="text-lg text-primary-foreground/90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our alumni who have transformed their careers with Peakpoint.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                story: "The MBA program gave me the strategic vision to launch my own company.",
              },
              {
                name: "David Okello",
                role: "Finance Director, Global Bank",
                story: "Peakpoint's finance program is world-class. It prepared me for the global stage.",
              },
              {
                name: "Maria Rodriguez",
                role: "Marketing Manager, Retail Giant",
                story: "The practical skills I learned helped me secure a promotion within months of graduating.",
              },
            ].map((story, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-smooth">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="font-bold text-xl">{story.name}</div>
                    <div className="text-sm text-muted-foreground">{story.role}</div>
                  </div>
                  <p className="text-muted-foreground italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-4xl font-bold mb-6">Accreditation & Recognition</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Peakpoint Business School is accredited by leading international bodies and recognized for its commitment
              to quality education. Our programs meet the highest standards of academic excellence and professional
              relevance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="p-6 border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">AACSB</div>
                <div className="text-sm text-muted-foreground">Accredited</div>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">EQUIS</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">AMBA</div>
                <div className="text-sm text-muted-foreground">Member</div>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">Top 50</div>
                <div className="text-sm text-muted-foreground">Global Ranking</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
