import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Search, Plus, Filter, MoreHorizontal, Building2 } from "lucide-react";

const academies = [
  { id: 1, name: "Star Academy", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Star", email: "admin@staracademy.edu", teachers: 24, students: 450, subjects: 12, status: "active" },
  { id: 2, name: "Golden Gate Education", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Golden", email: "info@goldengate.edu", teachers: 18, students: 320, subjects: 10, status: "active" },
  { id: 3, name: "Pioneer Institute", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Pioneer", email: "contact@pioneer.edu", teachers: 32, students: 680, subjects: 15, status: "active" },
  { id: 4, name: "Sunrise Academy", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Sunrise", email: "hello@sunrise.edu", teachers: 15, students: 280, subjects: 8, status: "pending" },
  { id: 5, name: "Excellence Learning", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Excellence", email: "admin@excellence.edu", teachers: 28, students: 520, subjects: 14, status: "active" },
];

export default function AcademiesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAcademies = academies.filter((academy) =>
    academy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Academies</h1>
          <p className="text-muted-foreground">Manage all registered academies</p>
        </div>
        <Button variant="hero">
          <Plus className="mr-2 h-4 w-4" />
          Add Academy
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search academies..."
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
                <TableHead>Academy</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Teachers</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Subjects</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAcademies.map((academy) => (
                <TableRow key={academy.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={academy.logo} />
                        <AvatarFallback>
                          <Building2 className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{academy.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{academy.email}</TableCell>
                  <TableCell>{academy.teachers}</TableCell>
                  <TableCell>{academy.students}</TableCell>
                  <TableCell>{academy.subjects}</TableCell>
                  <TableCell>
                    <Badge variant={academy.status === "active" ? "success" : "pending"}>
                      {academy.status}
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
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
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
