import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  FileText,
  CheckCircle,
  Calendar,
  DollarSign,
  Award,
  ArrowRight,
  Download,
  Clock,
} from "lucide-react";

const Admissions = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Complete our online application form with your personal and academic information.",
    },
    {
      number: "02",
      title: "Submit Documents",
      description: "Upload required documents including transcripts, test scores, and recommendation letters.",
    },
    {
      number: "03",
      title: "Application Review",
      description: "Our admissions team reviews your application and supporting materials.",
    },
    {
      number: "04",
      title: "Interview",
      description: "Selected candidates are invited for a personal interview (virtual or in-person).",
    },
    {
      number: "05",
      title: "Decision",
      description: "Receive your admission decision within 2-4 weeks of interview completion.",
    },
    {
      number: "06",
      title: "Enrollment",
      description: "Accept your offer and complete enrollment formalities to secure your place.",
    },
  ];

  const requirements = [
    {
      program: "Undergraduate",
      items: [
        "High school diploma or equivalent",
        "Minimum GPA of 3.0/4.0",
        "SAT/ACT scores (optional)",
        "English proficiency test (TOEFL/IELTS for international students)",
        "Personal statement",
        "Two letters of recommendation",
      ],
    },
    {
      program: "Masters",
      items: [
        "Bachelor's degree from accredited institution",
        "Minimum GPA of 3.0/4.0",
        "GMAT/GRE scores (waived for experienced professionals)",
        "English proficiency test (TOEFL/IELTS for international students)",
        "Statement of purpose",
        "Three letters of recommendation",
        "Resume/CV",
        "2+ years work experience (preferred for MBA)",
      ],
    },
  ];

  const deadlines = [
    { intake: "Fall 2024", deadline: "August 1, 2024", classes: "September 15, 2024" },
    { intake: "Spring 2025", deadline: "December 1, 2024", classes: "January 15, 2025" },
    { intake: "Summer 2025", deadline: "April 1, 2025", classes: "June 1, 2025" },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">Join Our Community</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 mb-8">
            Start your journey to business excellence. We make the application process simple and transparent
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/apply">Start Your Application</Link>
          </Button>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How to Apply</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to complete your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth border-2 hover:border-secondary">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-secondary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entry Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic and documentation requirements by program level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <FileText className="h-10 w-10 mb-4 text-secondary" />
                  <h3 className="text-2xl font-bold mb-6">{req.program} Programs</h3>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Application Deadlines</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Important dates for upcoming intakes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {deadlines.map((deadline, index) => (
                <Card key={index} className="border-2 hover:border-secondary transition-smooth">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{deadline.intake}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4 text-secondary" />
                            <span>Application Deadline: {deadline.deadline}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4 text-secondary" />
                            <span>Classes Begin: {deadline.classes}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="secondary" asChild>
                        <Link to="/apply">
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tuition & Financial Aid</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Investment in your future with flexible payment options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-secondary transition-smooth">
              <CardContent className="pt-6 text-center">
                <DollarSign className="h-10 w-10 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3">Competitive Tuition</h3>
                <p className="text-muted-foreground mb-4">
                  Transparent pricing with no hidden fees. Payment plans available.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="#">
                    View Fee Structure <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-smooth">
              <CardContent className="pt-6 text-center">
                <Award className="h-10 w-10 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3">Scholarships</h3>
                <p className="text-muted-foreground mb-4">
                  Merit-based scholarships covering up to 50% of tuition fees.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="#">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-smooth">
              <CardContent className="pt-6 text-center">
                <FileText className="h-10 w-10 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3">Financial Aid</h3>
                <p className="text-muted-foreground mb-4">
                  Student loans and flexible payment plans to support your education.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="#">Apply for Aid</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of students who have started their business careers with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/apply">Start Application</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
