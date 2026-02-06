import { StatCard } from "./StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  GraduationCap,
  BookOpen,
  ClipboardList,
  Calendar,
  MoreHorizontal,
} from "lucide-react";

const stats = [
  { title: "Total Teachers", value: "24", icon: Users, variant: "teacher" as const },
  { title: "Total Students", value: "450", icon: GraduationCap, variant: "student" as const },
  { title: "Active Classes", value: "32", icon: BookOpen, variant: "primary" as const },
  { title: "Subjects Offered", value: "12", icon: ClipboardList, variant: "info" as const },
];

const topTeachers = [
  { id: 1, name: "Dr. Sarah Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", subject: "Mathematics", students: 85, rating: 4.9 },
  { id: 2, name: "Prof. Michael Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", subject: "Physics", students: 72, rating: 4.8 },
  { id: 3, name: "Ms. Emily Davis", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily", subject: "English", students: 68, rating: 4.7 },
  { id: 4, name: "Mr. James Wilson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James", subject: "Chemistry", students: 55, rating: 4.6 },
];

const upcomingClasses = [
  { id: 1, name: "Advanced Mathematics", teacher: "Dr. Sarah Johnson", time: "09:00 AM", students: 25 },
  { id: 2, name: "Physics Lab", teacher: "Prof. Michael Chen", time: "10:30 AM", students: 20 },
  { id: 3, name: "English Literature", teacher: "Ms. Emily Davis", time: "02:00 PM", students: 30 },
];

const enrollmentRequests = [
  { id: 1, student: "Alex Thompson", class: "Advanced Mathematics", date: "2024-01-15" },
  { id: 2, student: "Maria Garcia", class: "Physics Lab", date: "2024-01-14" },
  { id: 3, student: "Ryan Lee", class: "English Literature", date: "2024-01-13" },
];

export function AcademyAdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Academy Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your academy's teachers, students, and classes
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Top Teachers */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Top Teachers</CardTitle>
              <CardDescription>Best performing teachers this month</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTeachers.map((teacher) => (
                <div key={teacher.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={teacher.avatar} />
                      <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{teacher.name}</p>
                      <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{teacher.students} students</p>
                      <p className="text-sm text-muted-foreground">⭐ {teacher.rating}</p>
                    </div>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((cls) => (
                <div key={cls.id} className="rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{cls.name}</p>
                    <Badge variant="outline">{cls.time}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{cls.teacher}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Progress value={(cls.students / 30) * 100} className="h-2" />
                    <span className="text-xs text-muted-foreground">{cls.students}/30</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enrollment Requests */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Enrollment Requests</CardTitle>
            <CardDescription>Students waiting to join classes</CardDescription>
          </div>
          <Button variant="outline" size="sm">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {enrollmentRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">{request.student}</p>
                  <p className="text-sm text-muted-foreground">{request.class}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="success">Approve</Button>
                  <Button size="sm" variant="outline">Reject</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
