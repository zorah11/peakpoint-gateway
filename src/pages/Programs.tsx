import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { BookOpen, Clock, Calendar, ChevronRight, Award, Users } from "lucide-react";
import { useEffect } from "react";
import { programs } from "@/lib/programsData";

const Programs = () => {
  const { type } = useParams();

  const filteredPrograms = type
    ? programs.filter((p) => p.id === type)
    : programs;

  const isSingleProgram = filteredPrograms.length === 1;
  const activeProgram = isSingleProgram ? filteredPrograms[0] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">
            {activeProgram ? activeProgram.badge : "Find Your Path"}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {activeProgram ? activeProgram.category : "Our Programs"}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 whitespace-pre-line">
            {activeProgram
              ? (activeProgram as any).description
              : "Explore our diverse range of academic and professional programs designed to help you succeed."}
          </p>
        </div>
      </section>

      {/* Programs Sections */}
      {filteredPrograms.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`py-20 ${sectionIndex % 2 === 1 ? "bg-muted/30" : ""}`}>
          <div className="container mx-auto px-4">
            {!isSingleProgram && (
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-primary text-primary-foreground">{section.badge}</Badge>
                <h2 className="text-4xl font-bold mb-4">{section.category}</h2>
                {(section as any).description && (
                  <div className="max-w-3xl mx-auto text-muted-foreground whitespace-pre-line text-lg mt-4">
                    {(section as any).description}
                  </div>
                )}
              </div>
            )}

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
                      <Link to="/apply">
                        Apply <ChevronRight className="ml-2 h-4 w-4" />
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
