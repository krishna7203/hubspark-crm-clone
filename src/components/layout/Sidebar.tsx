
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Users, 
  UserRound, 
  Briefcase, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard size={20} />
  },
  {
    title: "Admin",
    href: "/admin",
    icon: <Settings size={20} />
  },
  {
    title: "Customers",
    href: "/customers",
    icon: <Users size={20} />
  },
  {
    title: "Employees",
    href: "/employees",
    icon: <Briefcase size={20} />
  },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  return (
    <aside className={cn(
      "bg-sidebar text-sidebar-foreground h-screen flex flex-col transition-all duration-300 border-r border-sidebar-border",
      expanded ? "w-64" : "w-20"
    )}>
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        <div className={cn(
          "flex items-center gap-2 transition-all",
          expanded ? "opacity-100" : "opacity-0"
        )}>
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-bold">
            CVK
          </div>
          {expanded && <span className="font-bold">CVK</span>}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </Button>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 mx-2 rounded-md transition-all",
              location.pathname === item.href 
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "hover:bg-sidebar-accent/50 text-sidebar-foreground",
              !expanded && "justify-center"
            )}
          >
            <span>{item.icon}</span>
            {expanded && <span>{item.title}</span>}
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className={cn(
          "flex items-center gap-2",
          expanded ? "justify-start" : "justify-center"
        )}>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            <UserRound size={20} />
          </div>
          {expanded && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Admin User</span>
              <span className="text-xs opacity-70">admin@cvk.com</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
