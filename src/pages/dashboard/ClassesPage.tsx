import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Filter, Users, Clock, BookOpen } from "lucide-react";

const classes = [
  { id: 1, name: "Advanced Mathematics", subject: "Mathematics", teacher: "Dr. Sarah Johnson", teacherAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", students: 28, maxStudents: 30, schedule: "Mon, Wed, Fri - 9:00 AM", fee: "$150/month", status: "active" },
  { id: 2, name: "Physics Lab", subject: "Physics", teacher: "Prof. Michael Chen", teacherAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", students: 20, maxStudents: 25, schedule: "Tue, Thu - 10:30 AM", fee: "$180/month", status: "active" },
  { id: 3, name: "English Literature", subject: "English", teacher: "Ms. Emily Davis", teacherAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily", students: 30, maxStudents: 30, schedule: "Mon, Wed - 2:00 PM", fee: "$120/month", status: "full" },
  { id: 4, name: "Chemistry Basics", subject: "Chemistry", teacher: "Mr. James Wilson", teacherAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James", students: 22, maxStudents: 30, schedule: "Tue, Thu - 11:00 AM", fee: "$160/month", status: "active" },
  { id: 5, name: "Biology 101", subject: "Biology", teacher: "Dr. Lisa Brown", teacherAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa", students: 18, maxStudents: 25, schedule: "Wed, Fri - 3:00 PM", fee: "$140/month", status: "active" },
  { id: 6, name: "Algebra Basics", subject: "Mathematics", teacher: "Dr. Sarah Johnson", teacherAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", students: 25, maxStudents: 25, schedule: "Tue, Thu - 9:00 AM", fee: "$130/month", status: "full" },
];

export default function ClassesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClasses = classes.filter((cls) =>
    cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cls.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Classes</h1>
          <p className="text-muted-foreground">Manage all tuition classes</p>
        </div>
        <Button variant="hero">
          <Plus className="mr-2 h-4 w-4" />
          Create Class
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search classes..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredClasses.map((cls) => (
          <Card key={cls.id} variant="interactive">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="info">{cls.subject}</Badge>
                <Badge variant={cls.status === "active" ? "success" : "warning"}>
                  {cls.status === "full" ? "Full" : "Active"}
                </Badge>
              </div>
              <CardTitle className="text-lg">{cls.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarImage src={cls.teacherAvatar} />
                  <AvatarFallback>{cls.teacher.charAt(0)}</AvatarFallback>
                </Avatar>
                {cls.teacher}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {cls.schedule}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  {cls.fee}
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Enrollment
                    </span>
                    <span>{cls.students}/{cls.maxStudents}</span>
                  </div>
                  <Progress value={(cls.students / cls.maxStudents) * 100} className="h-2" />
                </div>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
