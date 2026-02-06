import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Pages
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import AcademiesPage from "@/pages/dashboard/AcademiesPage";
import TeachersPage from "@/pages/dashboard/TeachersPage";
import StudentsPage from "@/pages/dashboard/StudentsPage";
import ClassesPage from "@/pages/dashboard/ClassesPage";
import TasksPage from "@/pages/dashboard/TasksPage";
import MessagesPage from "@/pages/dashboard/MessagesPage";
import RegistrationsPage from "@/pages/dashboard/RegistrationsPage";
import SchedulePage from "@/pages/dashboard/SchedulePage";
import ProfilePage from "@/pages/dashboard/ProfilePage";
import SettingsPage from "@/pages/dashboard/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="academies" element={<AcademiesPage />} />
              <Route path="teachers" element={<TeachersPage />} />
              <Route path="students" element={<StudentsPage />} />
              <Route path="classes" element={<ClassesPage />} />
              <Route path="tasks" element={<TasksPage />} />
              <Route path="messages" element={<MessagesPage />} />
              <Route path="registrations" element={<RegistrationsPage />} />
              <Route path="schedule" element={<SchedulePage />} />
              <Route path="subjects" element={<ClassesPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
