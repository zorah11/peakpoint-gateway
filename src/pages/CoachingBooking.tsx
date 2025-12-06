import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Construction } from "lucide-react";

const CoachingBooking = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg border">
          <Construction className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Under Construction</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our coaching booking system is currently being updated to serve you better.
          </p>
          <p className="text-muted-foreground mb-8">
            In the meantime, please contact us directly to book a session.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/research-coaching">Back to Research</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingBooking;
