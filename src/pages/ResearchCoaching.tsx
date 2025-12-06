import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users, BarChart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ResearchCoaching = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Coaching Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support for your academic research and professional career development.
          </p>
        </div>
      </section>

      {/* Research Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                Research Support
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We guide undergraduate, masters, and PhD students through every stage of their research journey.
              </p>
              
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-secondary" />
                      Concept Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Guidance on writing clear, concise concept notes that articulate your research objectives and scope.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      Research Proposals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Assistance in structuring and writing defensible research proposals, including literature review and methodology.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-secondary" />
                      Data Analysis & Presentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Support with data collection tools, cleaning, statistical analysis, and presenting findings effectively.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-secondary" />
                      Report Writing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Help with drafting the final research report, ensuring academic tone and proper formatting.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Coaching Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 justify-center">
              <Users className="h-8 w-8 text-primary" />
              Coaching & Interview Prep
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Prepare for your next career move with our professional coaching services.
            </p>
            
            <Button size="lg" asChild>
              <Link to="/coaching-booking">Book a Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchCoaching;
