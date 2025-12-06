import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StudentCourses = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Courses</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Course Name {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Course description goes here...</p>
              <div className="text-sm font-medium">Progress: 45%</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
