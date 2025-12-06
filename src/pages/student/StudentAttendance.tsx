import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StudentAttendance = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Attendance Record</h1>
      <Card>
        <CardHeader>
          <CardTitle>Attendance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Attendance tracking table will go here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentAttendance;
