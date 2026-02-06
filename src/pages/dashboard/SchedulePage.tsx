import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const scheduleData = [
  { id: 1, name: "Advanced Mathematics", teacher: "Dr. Sarah Johnson", time: "9:00 AM - 10:00 AM", day: "Mon", color: "bg-primary" },
  { id: 2, name: "Physics Lab", teacher: "Prof. Michael Chen", time: "10:30 AM - 12:00 PM", day: "Mon", color: "bg-teacher" },
  { id: 3, name: "English Literature", teacher: "Ms. Emily Davis", time: "2:00 PM - 3:00 PM", day: "Mon", color: "bg-academy" },
  { id: 4, name: "Advanced Mathematics", teacher: "Dr. Sarah Johnson", time: "9:00 AM - 10:00 AM", day: "Wed", color: "bg-primary" },
  { id: 5, name: "Chemistry Basics", teacher: "Mr. James Wilson", time: "11:00 AM - 12:00 PM", day: "Tue", color: "bg-warning" },
  { id: 6, name: "Physics Lab", teacher: "Prof. Michael Chen", time: "10:30 AM - 12:00 PM", day: "Thu", color: "bg-teacher" },
  { id: 7, name: "Biology 101", teacher: "Dr. Lisa Brown", time: "3:00 PM - 4:00 PM", day: "Wed", color: "bg-success" },
  { id: 8, name: "Advanced Mathematics", teacher: "Dr. Sarah Johnson", time: "9:00 AM - 10:00 AM", day: "Fri", color: "bg-primary" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

export default function SchedulePage() {
  const getClassesForDayAndTime = (day: string, time: string) => {
    return scheduleData.filter(
      (cls) => cls.day === day && cls.time.includes(time.split(" ")[0])
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Schedule</h1>
          <p className="text-muted-foreground">View and manage class schedules</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
            January 15 - 19, 2024
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="grid grid-cols-6">
            {/* Time column */}
            <div className="border-r">
              <div className="h-16 border-b bg-muted/50 p-4"></div>
              {timeSlots.map((time) => (
                <div key={time} className="flex h-24 items-center border-b px-4">
                  <span className="text-sm text-muted-foreground">{time}</span>
                </div>
              ))}
            </div>

            {/* Day columns */}
            {days.map((day) => (
              <div key={day} className="border-r last:border-r-0">
                <div className="flex h-16 items-center justify-center border-b bg-muted/50">
                  <span className="font-medium">{day}</span>
                </div>
                {timeSlots.map((time) => {
                  const classes = getClassesForDayAndTime(day, time);
                  return (
                    <div key={`${day}-${time}`} className="h-24 border-b p-1">
                      {classes.map((cls) => (
                        <div
                          key={cls.id}
                          className={`${cls.color} h-full rounded-lg p-2 text-primary-foreground`}
                        >
                          <p className="text-xs font-medium">{cls.name}</p>
                          <p className="text-xs opacity-80">{cls.teacher}</p>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Classes */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Classes</CardTitle>
          <CardDescription>Your schedule for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {scheduleData.slice(0, 3).map((cls) => (
              <div key={cls.id} className="flex items-center gap-4 rounded-lg border p-4">
                <div className={`h-12 w-1 rounded-full ${cls.color}`} />
                <div className="flex-1">
                  <p className="font-medium">{cls.name}</p>
                  <p className="text-sm text-muted-foreground">{cls.teacher}</p>
                </div>
                <Badge variant="outline">
                  <Clock className="mr-1 h-3 w-3" />
                  {cls.time.split(" - ")[0]}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
