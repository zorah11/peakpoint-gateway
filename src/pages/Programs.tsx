import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Calendar, ChevronRight, Award, Users } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      category: "Undergraduate",
      badge: "Bachelor's Degree",
      items: [
        {
          title: "Bachelor of Business Administration (BBA)",
          duration: "4 years",
          mode: "Full-time",
          description:
            "Comprehensive foundation in business principles including management, marketing, finance, and entrepreneurship.",
          highlights: ["Internship opportunities", "Industry projects", "Global exchange programs"],
        },
        {
          title: "Bachelor of Commerce (B.Com)",
          duration: "3 years",
          mode: "Full-time",
          description:
            "Focused curriculum in accounting, economics, and business law with strong analytical skills development.",
          highlights: ["Professional certifications", "Case study methodology", "Research opportunities"],
        },
      ],
    },
    {
      category: "Masters",
      badge: "Postgraduate",
      items: [
        {
          title: "Master of Business Administration (MBA)",
          duration: "2 years",
          mode: "Full-time / Part-time",
          description:
            "Advanced management education with specializations in strategy, finance, marketing, and operations.",
          highlights: ["Executive mentorship", "Consulting projects", "International study tours"],
        },
        {
          title: "Master of Finance (MFin)",
          duration: "1.5 years",
          mode: "Full-time",
          description:
            "Specialized program in corporate finance, investment management, and financial analytics.",
          highlights: ["Bloomberg Terminal access", "CFA preparation", "Wall Street connections"],
        },
        {
          title: "Master of Marketing (MMark)",
          duration: "1.5 years",
          mode: "Full-time",
          description:
            "Contemporary marketing strategies, digital marketing, brand management, and consumer behavior.",
          highlights: ["Agency partnerships", "Live campaigns", "Marketing analytics tools"],
        },
      ],
    },
    {
      category: "Professional",
      badge: "Certificate Programs",
      items: [
        {
          title: "Digital Marketing Certificate",
          duration: "6 months",
          mode: "Online / Hybrid",
          description:
            "Master SEO, social media marketing, content strategy, and digital analytics.",
          highlights: ["Google certifications", "Real campaign experience", "Portfolio development"],
        },
        {
          title: "Project Management Professional",
          duration: "4 months",
          mode: "Flexible",
          description:
            "PMP preparation with agile methodologies, risk management, and leadership skills.",
          highlights: ["PMP exam prep", "Agile & Scrum certified", "Industry case studies"],
        },
        {
          title: "Data Analytics for Business",
          duration: "5 months",
          mode: "Online",
          description:
            "Business intelligence, predictive analytics, and data-driven decision making.",
          highlights: ["Python & R programming", "Tableau expertise", "Real business datasets"],
        },
      ],
    },
    {
      category: "Vocational",
      badge: "Short Courses",
      items: [
        {
          title: "Accounting Fundamentals",
          duration: "3 months",
          mode: "Part-time",
          description: "Essential accounting principles, bookkeeping, and financial reporting basics.",
          highlights: ["QuickBooks training", "Excel for accounting", "Tax fundamentals"],
        },
        {
          title: "Business Communication Skills",
          duration: "2 months",
          mode: "Weekend",
          description:
            "Professional writing, presentation skills, and business correspondence.",
          highlights: ["Public speaking", "Email etiquette", "Meeting facilitation"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">Find Your Path</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            From undergraduate degrees to professional certifications, find the perfect program to advance your career
          </p>
        </div>
      </section>

      {/* Programs Sections */}
      {programs.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`py-20 ${sectionIndex % 2 === 1 ? "bg-muted/30" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-primary-foreground">{section.badge}</Badge>
              <h2 className="text-4xl font-bold mb-4">{section.category} Programs</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {section.items.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-smooth border-2 hover:border-secondary">
                  <CardContent className="pt-6">
                    <BookOpen className="h-10 w-10 mb-4 text-secondary" />
                    <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>

                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{program.mode}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-secondary" />
                        Program Highlights
                      </h4>
                      <ul className="space-y-1">
                        {program.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-secondary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="secondary" className="w-full" asChild>
                      <Link to="/admissions">
                        Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Not Sure Which Program is Right for You?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Our admissions counselors are here to help you find the perfect program for your goals
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
