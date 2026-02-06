import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { cn, getRoleLabel } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  LayoutDashboard,
  Building2,
  Users,
  BookOpen,
  CalendarDays,
  ClipboardList,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  UserCheck,
  ChevronUp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuConfig = {
  super_admin: [
    { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
    { title: "Academies", icon: Building2, url: "/dashboard/academies" },
    { title: "Teachers", icon: Users, url: "/dashboard/teachers" },
    { title: "Students", icon: GraduationCap, url: "/dashboard/students" },
    { title: "Registrations", icon: UserCheck, url: "/dashboard/registrations" },
    { title: "Messages", icon: MessageSquare, url: "/dashboard/messages", badge: 3 },
    { title: "Settings", icon: Settings, url: "/dashboard/settings" },
  ],
  academy_admin: [
    { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
    { title: "Teachers", icon: Users, url: "/dashboard/teachers" },
    { title: "Students", icon: GraduationCap, url: "/dashboard/students" },
    { title: "Classes", icon: BookOpen, url: "/dashboard/classes" },
    { title: "Subjects", icon: ClipboardList, url: "/dashboard/subjects" },
    { title: "Schedule", icon: CalendarDays, url: "/dashboard/schedule" },
    { title: "Messages", icon: MessageSquare, url: "/dashboard/messages", badge: 5 },
    { title: "Settings", icon: Settings, url: "/dashboard/settings" },
  ],
  teacher: [
    { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
    { title: "My Classes", icon: BookOpen, url: "/dashboard/classes" },
    { title: "Students", icon: GraduationCap, url: "/dashboard/students" },
    { title: "Tasks", icon: ClipboardList, url: "/dashboard/tasks" },
    { title: "Schedule", icon: CalendarDays, url: "/dashboard/schedule" },
    { title: "Messages", icon: MessageSquare, url: "/dashboard/messages", badge: 2 },
    { title: "Settings", icon: Settings, url: "/dashboard/settings" },
  ],
  student: [
    { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
    { title: "My Classes", icon: BookOpen, url: "/dashboard/classes" },
    { title: "Tasks", icon: ClipboardList, url: "/dashboard/tasks" },
    { title: "Schedule", icon: CalendarDays, url: "/dashboard/schedule" },
    { title: "Messages", icon: MessageSquare, url: "/dashboard/messages", badge: 1 },
    { title: "Settings", icon: Settings, url: "/dashboard/settings" },
  ],
};

export function AppSidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const { state } = useSidebar();

  if (!user) return null;

  const menuItems = menuConfig[user.role];
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-sidebar-foreground">TuitionHub</span>
              <span className="text-xs text-sidebar-muted">Management System</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-muted">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                    >
                      <Link to={item.url}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                        {item.badge && !isCollapsed && (
                          <Badge variant="destructive" className="ml-auto h-5 min-w-5 px-1.5">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-sidebar-accent">
              <Avatar size="sm">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <>
                  <div className="flex flex-1 flex-col text-left">
                    <span className="text-sm font-medium text-sidebar-foreground">
                      {user.name}
                    </span>
                    <span className="text-xs text-sidebar-muted">
                      {getRoleLabel(user.role)}
                    </span>
                  </div>
                  <ChevronUp className="h-4 w-4 text-sidebar-muted" />
                </>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem asChild>
              <Link to="/dashboard/profile">
                <Users className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/dashboard/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
