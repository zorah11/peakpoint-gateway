import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StudentPayments = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fees & Payments</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Outstanding Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-500">$500.00</div>
            <p className="text-muted-foreground">Due by Dec 31, 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>List of past transactions will go here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentPayments;
