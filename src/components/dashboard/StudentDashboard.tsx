import { StatCard } from "./StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  ClipboardList,
  Calendar,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const stats = [
  { title: "Enrolled Classes", value: "4", icon: BookOpen, variant: "primary" as const },
  { title: "Pending Tasks", value: "3", icon: ClipboardList, variant: "warning" as const },
  { title: "Completed Tasks", value: "18", icon: CheckCircle2, variant: "success" as const },
  { title: "Unread Messages", value: "2", icon: MessageSquare, variant: "info" as const },
];

const enrolledClasses = [
  { id: 1, name: "Advanced Mathematics", teacher: "Dr. Sarah Johnson", progress: 75, nextClass: "Tomorrow, 9:00 AM" },
  { id: 2, name: "Physics Lab", teacher: "Prof. Michael Chen", progress: 60, nextClass: "Wed, 10:30 AM" },
  { id: 3, name: "English Literature", teacher: "Ms. Emily Davis", progress: 85, nextClass: "Today, 2:00 PM" },
  { id: 4, name: "Chemistry", teacher: "Mr. James Wilson", progress: 45, nextClass: "Thu, 11:00 AM" },
];

const upcomingTasks = [
  { id: 1, title: "Math Assignment 5", class: "Advanced Mathematics", dueDate: "Jan 20", status: "pending", priority: "high" },
  { id: 2, title: "Physics Lab Report", class: "Physics Lab", dueDate: "Jan 18", status: "pending", priority: "medium" },
  { id: 3, title: "Essay: Shakespeare", class: "English Literature", dueDate: "Jan 22", status: "submitted", priority: "low" },
];

const todaySchedule = [
  { id: 1, name: "English Literature", time: "2:00 PM - 3:00 PM", teacher: "Ms. Emily Davis", status: "upcoming" },
  { id: 2, name: "Chemistry Lab", time: "4:00 PM - 5:30 PM", teacher: "Mr. James Wilson", status: "upcoming" },
];

export function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome Back, Emily! 👋</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your classes today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Enrolled Classes */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>My Classes</CardTitle>
              <CardDescription>Your enrolled classes and progress</CardDescription>
            </div>
            <Button variant="outline" size="sm">Browse Classes</Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {enrolledClasses.map((cls) => (
                <Card key={cls.id} variant="interactive" className="p-4">
                  <h3 className="font-semibold">{cls.name}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${cls.teacher}`} />
                      <AvatarFallback>{cls.teacher.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{cls.teacher}</span>
                  </div>
                  <div className="mt-3">
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{cls.progress}%</span>
                    </div>
                    <Progress value={cls.progress} className="h-2" />
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{cls.nextClass}</span>
                  </div>
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
              {todaySchedule.map((item) => (
                <div key={item.id} className="rounded-lg border p-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.teacher}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item.time}</span>
                    <Badge variant="info">Upcoming</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Assignments and deadlines</CardDescription>
          </div>
          <Button variant="outline" size="sm">View All Tasks</Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {upcomingTasks.map((task) => (
              <div
                key={task.id}
                className={`rounded-lg border p-4 ${
                  task.status === "submitted" ? "bg-success/5 border-success/20" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">{task.class}</p>
                  </div>
                  {task.priority === "high" && (
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  )}
                  {task.status === "submitted" && (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <Badge variant={task.status === "submitted" ? "success" : "warning"}>
                    {task.status === "submitted" ? "Submitted" : `Due ${task.dueDate}`}
                  </Badge>
                  {task.status !== "submitted" && (
                    <Button size="sm">Submit</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
