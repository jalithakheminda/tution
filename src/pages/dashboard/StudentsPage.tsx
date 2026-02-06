import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Plus, Filter, MoreHorizontal } from "lucide-react";

const students = [
  { id: 1, name: "Alex Thompson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", email: "alex@email.com", enrolledClasses: 4, parent: "John Thompson", status: "active" },
  { id: 2, name: "Maria Garcia", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria", email: "maria@email.com", enrolledClasses: 3, parent: "Rosa Garcia", status: "active" },
  { id: 3, name: "Ryan Lee", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan", email: "ryan@email.com", enrolledClasses: 5, parent: "David Lee", status: "active" },
  { id: 4, name: "Emma Wilson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", email: "emma@email.com", enrolledClasses: 3, parent: "Sarah Wilson", status: "inactive" },
  { id: 5, name: "James Brown", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JamesB", email: "james@email.com", enrolledClasses: 4, parent: "Michael Brown", status: "active" },
];

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Students</h1>
          <p className="text-muted-foreground">Manage all enrolled students</p>
        </div>
        <Button variant="hero">
          <Plus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search students..."
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
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Enrolled Classes</TableHead>
                <TableHead>Parent/Guardian</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.enrolledClasses}</TableCell>
                  <TableCell>{student.parent}</TableCell>
                  <TableCell>
                    <Badge variant={student.status === "active" ? "success" : "secondary"}>
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
