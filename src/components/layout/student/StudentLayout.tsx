import { Outlet, Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  CalendarCheck, 
  Calendar, 
  CreditCard, 
  User, 
  LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const StudentLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-primary">PeakPoint Student</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/student/dashboard">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/student/courses">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BookOpen className="h-4 w-4" />
              My Courses
            </Button>
          </Link>
          <Link to="/student/attendance">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <CalendarCheck className="h-4 w-4" />
              Attendance
            </Button>
          </Link>
          <Link to="/student/schedule">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar className="h-4 w-4" />
              Timetable
            </Button>
          </Link>
          <Link to="/student/payments">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <CreditCard className="h-4 w-4" />
              Fees & Payments
            </Button>
          </Link>
          <Link to="/student/profile">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <User className="h-4 w-4" />
              Profile
            </Button>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Button variant="outline" className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-50">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:hidden">
          <span className="font-bold">Student Portal</span>
          {/* Mobile menu trigger would go here */}
        </header>
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default StudentLayout;
