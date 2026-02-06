import { StatCard } from "./StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Building2,
  Users,
  GraduationCap,
  UserCheck,
  TrendingUp,
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";

const stats = [
  { title: "Total Academies", value: "156", icon: Building2, variant: "academy" as const, trend: { value: 12, isPositive: true } },
  { title: "Total Teachers", value: "1,240", icon: Users, variant: "teacher" as const, trend: { value: 8, isPositive: true } },
  { title: "Total Students", value: "15,890", icon: GraduationCap, variant: "student" as const, trend: { value: 15, isPositive: true } },
  { title: "Pending Registrations", value: "23", icon: UserCheck, variant: "warning" as const },
];

const pendingAcademies = [
  { id: 1, name: "Bright Future Academy", email: "admin@brightfuture.edu", date: "2024-01-15", type: "Academy" },
  { id: 2, name: "Excellence Learning Center", email: "contact@excellence.edu", date: "2024-01-14", type: "Academy" },
  { id: 3, name: "Sarah Johnson", email: "sarah@email.com", date: "2024-01-13", type: "Teacher" },
  { id: 4, name: "Michael Chen", email: "michael@email.com", date: "2024-01-12", type: "Teacher" },
];

const recentAcademies = [
  { id: 1, name: "Star Academy", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Star", teachers: 24, students: 450, status: "active" },
  { id: 2, name: "Golden Gate Education", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Golden", teachers: 18, students: 320, status: "active" },
  { id: 3, name: "Pioneer Institute", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Pioneer", teachers: 32, students: 680, status: "active" },
  { id: 4, name: "Sunrise Academy", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Sunrise", teachers: 15, students: 280, status: "pending" },
];

export function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Super Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage all academies, teachers, and system-wide settings
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pending Registrations */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pending Registrations</CardTitle>
              <CardDescription>Review and approve registration requests</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingAcademies.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.name}`} />
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={item.type === "Academy" ? "academy" : "teacher"}>
                      {item.type}
                    </Badge>
                    <Button size="icon" variant="ghost" className="text-success hover:bg-success/10">
                      <CheckCircle2 className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-destructive hover:bg-destructive/10">
                      <XCircle className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Academies */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Academies</CardTitle>
              <CardDescription>Latest registered academies</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAcademies.map((academy) => (
                <div key={academy.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={academy.logo} />
                      <AvatarFallback>{academy.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{academy.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {academy.teachers} teachers · {academy.students} students
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={academy.status === "active" ? "success" : "pending"}>
                      {academy.status}
                    </Badge>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
