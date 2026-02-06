import { useAuth } from "@/contexts/AuthContext";
import { SuperAdminDashboard } from "@/components/dashboard/SuperAdminDashboard";
import { AcademyAdminDashboard } from "@/components/dashboard/AcademyAdminDashboard";
import { TeacherDashboard } from "@/components/dashboard/TeacherDashboard";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) return null;

  const dashboardComponents = {
    super_admin: SuperAdminDashboard,
    academy_admin: AcademyAdminDashboard,
    teacher: TeacherDashboard,
    student: StudentDashboard,
  };

  const DashboardComponent = dashboardComponents[user.role];

  return <DashboardComponent />;
}
