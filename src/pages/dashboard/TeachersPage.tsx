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
import { Search, Plus, Filter, MoreHorizontal, Users } from "lucide-react";

const teachers = [
  { id: 1, name: "Dr. Sarah Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", email: "sarah@email.com", subjects: ["Mathematics"], students: 85, classes: 4, status: "active" },
  { id: 2, name: "Prof. Michael Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", email: "michael@email.com", subjects: ["Physics"], students: 72, classes: 3, status: "active" },
  { id: 3, name: "Ms. Emily Davis", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily", email: "emily@email.com", subjects: ["English", "Literature"], students: 68, classes: 3, status: "active" },
  { id: 4, name: "Mr. James Wilson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James", email: "james@email.com", subjects: ["Chemistry"], students: 55, classes: 2, status: "pending" },
  { id: 5, name: "Dr. Lisa Brown", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa", email: "lisa@email.com", subjects: ["Biology"], students: 62, classes: 3, status: "active" },
];

export default function TeachersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Teachers</h1>
          <p className="text-muted-foreground">Manage all registered teachers</p>
        </div>
        <Button variant="hero">
          <Plus className="mr-2 h-4 w-4" />
          Add Teacher
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search teachers..."
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
                <TableHead>Teacher</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subjects</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Classes</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={teacher.avatar} />
                        <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{teacher.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {teacher.subjects.map((subject) => (
                        <Badge key={subject} variant="secondary">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{teacher.students}</TableCell>
                  <TableCell>{teacher.classes}</TableCell>
                  <TableCell>
                    <Badge variant={teacher.status === "active" ? "success" : "pending"}>
                      {teacher.status}
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
