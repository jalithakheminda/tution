import { UserRole } from "@/lib/utils";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  createdAt: string;
}

export interface Academy {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  address?: string;
  city?: string;
  country?: string;
  phone?: string;
  email?: string;
  website?: string;
  status: "pending" | "approved" | "rejected";
  teacherCount: number;
  studentCount: number;
  subjectCount: number;
  createdAt: string;
}

export interface Teacher {
  id: string;
  user: User;
  academyId?: string;
  academy?: Academy;
  subjects: Subject[];
  isIndependent: boolean;
  status: "pending" | "approved" | "rejected";
  bio?: string;
  experience?: string;
  qualifications?: string;
  studentCount: number;
  classCount: number;
}

export interface Student {
  id: string;
  user: User;
  parentName?: string;
  parentPhone?: string;
  parentEmail?: string;
  enrolledClasses: TuitionClass[];
  status: "active" | "inactive";
}

export interface Subject {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

export interface TuitionClass {
  id: string;
  name: string;
  subject: Subject;
  teacher: Teacher;
  academy?: Academy;
  schedule: ClassSchedule[];
  fee: number;
  feeType: "monthly" | "per_class" | "term";
  maxStudents: number;
  enrolledStudents: number;
  status: "active" | "inactive" | "completed";
  startDate: string;
  endDate?: string;
}

export interface ClassSchedule {
  id: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  classId: string;
  class?: TuitionClass;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
  assignedTo?: Student[];
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  sender?: User;
  receiverId: string;
  receiver?: User;
  content: string;
  isRead: boolean;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  isRead: boolean;
  createdAt: string;
}

export interface DashboardStats {
  totalAcademies?: number;
  totalTeachers?: number;
  totalStudents?: number;
  totalClasses?: number;
  pendingRegistrations?: number;
  activeClasses?: number;
  pendingTasks?: number;
  unreadMessages?: number;
}
