import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Filter, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const tasks = [
  { id: 1, title: "Math Assignment 5", class: "Advanced Mathematics", dueDate: "Jan 20, 2024", submissions: 18, total: 28, status: "pending", priority: "high" },
  { id: 2, title: "Physics Lab Report", class: "Physics Lab", dueDate: "Jan 18, 2024", submissions: 20, total: 20, status: "completed", priority: "medium" },
  { id: 3, title: "Essay: Shakespeare", class: "English Literature", dueDate: "Jan 22, 2024", submissions: 25, total: 30, status: "pending", priority: "low" },
  { id: 4, title: "Chemistry Quiz", class: "Chemistry Basics", dueDate: "Jan 19, 2024", submissions: 22, total: 22, status: "completed", priority: "high" },
  { id: 5, title: "Biology Research Paper", class: "Biology 101", dueDate: "Jan 25, 2024", submissions: 5, total: 18, status: "pending", priority: "medium" },
  { id: 6, title: "Algebra Problem Set", class: "Algebra Basics", dueDate: "Jan 17, 2024", submissions: 25, total: 25, status: "graded", priority: "low" },
];

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || task.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
      case "graded":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return <Badge variant="warning">Medium</Badge>;
      case "low":
        return <Badge variant="secondary">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tasks</h1>
          <p className="text-muted-foreground">Manage assignments and tasks</p>
        </div>
        <Button variant="hero">
          <Plus className="mr-2 h-4 w-4" />
          Create Task
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tasks..."
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
        </div>

        <TabsContent value={activeTab} className="mt-6">
          <div className="grid gap-4">
            {filteredTasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(task.status)}
                    <div>
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">{task.class}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm font-medium">Due: {task.dueDate}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Progress
                          value={(task.submissions / task.total) * 100}
                          className="h-2 w-24"
                        />
                        <span className="text-xs text-muted-foreground">
                          {task.submissions}/{task.total}
                        </span>
                      </div>
                    </div>
                    {getPriorityBadge(task.priority)}
                    <Badge
                      variant={
                        task.status === "graded"
                          ? "success"
                          : task.status === "completed"
                          ? "info"
                          : "pending"
                      }
                    >
                      {task.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
