import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Briefcase, Heart, BookOpen, Globe } from "lucide-react";

const StudentLife = () => {
  const activities = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Student Clubs & Societies",
      description: "Join over 30 active clubs covering business, technology, arts, sports, and social causes.",
      highlights: [
        "Business Strategy Club",
        "Entrepreneurship Society",
        "Marketing Association",
        "Finance Club",
        "Cultural Societies",
      ],
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Sports & Recreation",
      description: "Stay active with our comprehensive sports facilities and competitive teams.",
      highlights: [
        "Modern fitness center",
        "Basketball & Tennis courts",
        "Swimming pool",
        "Intramural leagues",
        "Yoga & wellness programs",
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Career Development",
      description: "Professional development programs, internships, and placement support.",
      highlights: [
        "Career counseling",
        "Industry mentorship",
        "Internship placements",
        "Job fairs & networking",
        "Resume workshops",
      ],
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community Service",
      description: "Make a difference through volunteer programs and social initiatives.",
      highlights: [
        "Community outreach",
        "Environmental projects",
        "Charity fundraisers",
        "NGO partnerships",
        "Social awareness campaigns",
      ],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Academic Support",
      description: "Comprehensive resources to help you excel in your studies.",
      highlights: [
        "Tutoring services",
        "Study groups",
        "Academic advising",
        "Writing center",
        "Research support",
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International Programs",
      description: "Global exposure through exchange programs and international events.",
      highlights: [
        "Study abroad opportunities",
        "International conferences",
        "Cultural exchange",
        "Global case competitions",
        "International internships",
      ],
    },
  ];

  const events = [
    {
      title: "Annual Business Festival",
      description: "Week-long celebration of business excellence with competitions, workshops, and industry speakers.",
    },
    {
      title: "Cultural Night",
      description: "Showcase of diverse cultures through music, dance, food, and traditional performances.",
    },
    {
      title: "Startup Weekend",
      description: "54-hour entrepreneurship challenge where students develop and pitch business ideas.",
    },
    {
      title: "Alumni Networking Gala",
      description: "Connect with successful alumni and build your professional network.",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">Life at Peakpoint</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Student Life</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Experience a vibrant campus community where learning extends beyond the classroom
          </p>
        </div>
      </section>

      {/* Activities & Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Campus Life & Activities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover countless ways to grow, connect, and make lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-smooth hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit text-primary">{activity.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <ul className="space-y-2">
                    {activity.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Annual Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Year-round celebrations and activities that bring our community together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-smooth">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-4xl font-bold mb-6">Alumni Network</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join a global network of over 15,000 alumni working in leading companies across 80+ countries. Our alumni
              community provides mentorship, networking opportunities, and career support throughout your professional
              journey.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-sm text-muted-foreground">Alumni Worldwide</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">80+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Fortune 500</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Startups Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience Campus Life</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Visit our campus and discover what makes Peakpoint special
          </p>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
