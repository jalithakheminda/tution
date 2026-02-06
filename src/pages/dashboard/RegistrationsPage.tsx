import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, XCircle, Building2, Users, Clock } from "lucide-react";

const academyRequests = [
  { id: 1, name: "Bright Future Academy", email: "admin@brightfuture.edu", phone: "+1 234 567 890", address: "123 Education St, NY", date: "Jan 15, 2024" },
  { id: 2, name: "Excellence Learning Center", email: "contact@excellence.edu", phone: "+1 234 567 891", address: "456 Scholar Ave, CA", date: "Jan 14, 2024" },
  { id: 3, name: "Premier Education Hub", email: "info@premier.edu", phone: "+1 234 567 892", address: "789 Academy Rd, TX", date: "Jan 13, 2024" },
];

const teacherRequests = [
  { id: 1, name: "Sarah Johnson", email: "sarah@email.com", subject: "Mathematics", experience: "10 years", date: "Jan 15, 2024", type: "Independent" },
  { id: 2, name: "Michael Chen", email: "michael@email.com", subject: "Physics", experience: "8 years", date: "Jan 14, 2024", type: "Academy-Affiliated" },
  { id: 3, name: "Emily Davis", email: "emily@email.com", subject: "English", experience: "5 years", date: "Jan 13, 2024", type: "Independent" },
  { id: 4, name: "James Wilson", email: "james@email.com", subject: "Chemistry", experience: "12 years", date: "Jan 12, 2024", type: "Academy-Affiliated" },
];

export default function RegistrationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Registration Requests</h1>
        <p className="text-muted-foreground">Review and approve pending registrations</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card variant="stat">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-xl bg-warning/10 p-3">
              <Clock className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold">7</p>
              <p className="text-sm text-muted-foreground">Total Pending</p>
            </div>
          </CardContent>
        </Card>
        <Card variant="stat">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-xl bg-academy/10 p-3">
              <Building2 className="h-6 w-6 text-academy" />
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Academy Requests</p>
            </div>
          </CardContent>
        </Card>
        <Card variant="stat">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-xl bg-teacher/10 p-3">
              <Users className="h-6 w-6 text-teacher" />
            </div>
            <div>
              <p className="text-2xl font-bold">4</p>
              <p className="text-sm text-muted-foreground">Teacher Requests</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="academies">
        <TabsList>
          <TabsTrigger value="academies">Academy Requests</TabsTrigger>
          <TabsTrigger value="teachers">Teacher Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="academies" className="mt-6">
          <div className="grid gap-4">
            {academyRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <AvatarImage src={`https://api.dicebear.com/7.x/shapes/svg?seed=${request.name}`} />
                      <AvatarFallback>
                        <Building2 className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{request.name}</h3>
                      <p className="text-sm text-muted-foreground">{request.email}</p>
                      <p className="text-sm text-muted-foreground">{request.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{request.phone}</p>
                      <p className="text-sm text-muted-foreground">Applied: {request.date}</p>
                    </div>
                    <Badge variant="pending">Pending</Badge>
                    <div className="flex gap-2">
                      <Button variant="success" size="sm">
                        <CheckCircle2 className="mr-1 h-4 w-4" />
                        Approve
                      </Button>
                      <Button variant="outline" size="sm">
                        <XCircle className="mr-1 h-4 w-4" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="teachers" className="mt-6">
          <div className="grid gap-4">
            {teacherRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${request.name}`} />
                      <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{request.name}</h3>
                      <p className="text-sm text-muted-foreground">{request.email}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge variant="info">{request.subject}</Badge>
                        <Badge variant="secondary">{request.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{request.experience} experience</p>
                      <p className="text-sm text-muted-foreground">Applied: {request.date}</p>
                    </div>
                    <Badge variant="pending">Pending</Badge>
                    <div className="flex gap-2">
                      <Button variant="success" size="sm">
                        <CheckCircle2 className="mr-1 h-4 w-4" />
                        Approve
                      </Button>
                      <Button variant="outline" size="sm">
                        <XCircle className="mr-1 h-4 w-4" />
                        Reject
                      </Button>
                    </div>
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
