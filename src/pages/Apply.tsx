import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

const Apply = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto text-center p-12">
          <CardContent>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-secondary/10 rounded-full">
                <Construction className="h-16 w-16 text-secondary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Page Under Construction</h1>
            <p className="text-muted-foreground text-lg">
              This page is currently being built as we gather the necessary information required to complete it. Please check back later.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Apply;
