import { StatCard } from "./StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  GraduationCap,
  ClipboardList,
  MessageSquare,
  Calendar,
  Plus,
} from "lucide-react";

const stats = [
  { title: "My Classes", value: "5", icon: BookOpen, variant: "primary" as const },
  { title: "Total Students", value: "145", icon: GraduationCap, variant: "student" as const },
  { title: "Pending Tasks", value: "12", icon: ClipboardList, variant: "warning" as const },
  { title: "Unread Messages", value: "8", icon: MessageSquare, variant: "info" as const },
];

const myClasses = [
  { id: 1, name: "Advanced Mathematics", subject: "Mathematics", students: 28, maxStudents: 30, schedule: "Mon, Wed, Fri - 9:00 AM" },
  { id: 2, name: "Algebra Basics", subject: "Mathematics", students: 25, maxStudents: 25, schedule: "Tue, Thu - 10:30 AM" },
  { id: 3, name: "Calculus I", subject: "Mathematics", students: 22, maxStudents: 30, schedule: "Mon, Wed - 2:00 PM" },
  { id: 4, name: "Statistics", subject: "Mathematics", students: 30, maxStudents: 30, schedule: "Fri - 11:00 AM" },
];

const recentStudents = [
  { id: 1, name: "Alex Thompson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", class: "Advanced Mathematics", progress: 85 },
  { id: 2, name: "Maria Garcia", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria", class: "Algebra Basics", progress: 92 },
  { id: 3, name: "Ryan Lee", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan", class: "Calculus I", progress: 78 },
  { id: 4, name: "Emma Wilson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", class: "Statistics", progress: 88 },
];

const pendingTasks = [
  { id: 1, title: "Math Assignment 5", class: "Advanced Mathematics", submissions: 18, total: 28, dueDate: "Jan 20" },
  { id: 2, title: "Algebra Quiz", class: "Algebra Basics", submissions: 20, total: 25, dueDate: "Jan 18" },
  { id: 3, title: "Calculus Problem Set", class: "Calculus I", submissions: 15, total: 22, dueDate: "Jan 22" },
];

export function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your classes, students, and assignments
          </p>
        </div>
        <Button variant="hero">
          <Plus className="mr-2 h-4 w-4" />
          Create Class
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* My Classes */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>My Classes</CardTitle>
              <CardDescription>Classes you're currently teaching</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {myClasses.map((cls) => (
                <Card key={cls.id} variant="interactive" className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="info">{cls.subject}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {cls.students}/{cls.maxStudents} students
                    </span>
                  </div>
                  <h3 className="font-semibold">{cls.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cls.schedule}</p>
                  <Progress
                    value={(cls.students / cls.maxStudents) * 100}
                    className="mt-3 h-2"
                  />
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="rounded-lg bg-primary/10 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Advanced Mathematics</p>
                  <Badge>Now</Badge>
                </div>
                <p className="text-sm text-muted-foreground">9:00 AM - 10:00 AM</p>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Calculus I</p>
                  <Badge variant="outline">2:00 PM</Badge>
                </div>
                <p className="text-sm text-muted-foreground">2:00 PM - 3:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Students */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Top Performing Students</CardTitle>
              <CardDescription>Students with highest progress</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentStudents.map((student) => (
                <div key={student.id} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.class}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={student.progress} className="h-2 w-20" />
                    <span className="text-sm font-medium">{student.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>Assignments awaiting submissions</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Create Task
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingTasks.map((task) => (
                <div key={task.id} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{task.title}</p>
                    <Badge variant="warning">Due {task.dueDate}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{task.class}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Progress value={(task.submissions / task.total) * 100} className="h-2" />
                    <span className="text-xs text-muted-foreground">
                      {task.submissions}/{task.total} submitted
                    </span>
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
