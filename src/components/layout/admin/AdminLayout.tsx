import { Outlet, Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Users, 
  LogOut,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">PeakPoint Admin</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin/dashboard">
            <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-slate-800 hover:text-white">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/admin/courses">
            <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-slate-800 hover:text-white">
              <BookOpen className="h-4 w-4" />
              Course Management
            </Button>
          </Link>
          <Link to="/admin/schedule">
            <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-slate-800 hover:text-white">
              <Calendar className="h-4 w-4" />
              Class Scheduling
            </Button>
          </Link>
          <Link to="/admin/students">
            <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-slate-800 hover:text-white">
              <Users className="h-4 w-4" />
              Student Management
            </Button>
          </Link>
          <Link to="/admin/settings">
            <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-slate-800 hover:text-white">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Button variant="ghost" className="w-full justify-start gap-2 text-red-400 hover:text-red-300 hover:bg-slate-800">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
          <h1 className="font-semibold text-lg">Administration</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Admin User</span>
            <div className="h-8 w-8 rounded-full bg-slate-200"></div>
          </div>
        </header>
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
