import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminSchedule = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Class Scheduling</h1>
        <Button>Add Class Session</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Master Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Calendar or list view of all classes.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSchedule;
