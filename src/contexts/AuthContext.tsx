import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/types";
import { UserRole } from "@/lib/utils";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  setMockUser: (role: UserRole) => void;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string;
}

const mockUsers: Record<UserRole, User> = {
  super_admin: {
    id: "1",
    name: "John Admin",
    email: "admin@tuition.com",
    role: "super_admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    createdAt: "2024-01-01",
  },
  academy_admin: {
    id: "2",
    name: "Sarah Academy",
    email: "academy@tuition.com",
    role: "academy_admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    createdAt: "2024-01-01",
  },
  teacher: {
    id: "3",
    name: "Michael Teacher",
    email: "teacher@tuition.com",
    role: "teacher",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    createdAt: "2024-01-01",
  },
  student: {
    id: "4",
    name: "Emily Student",
    email: "student@tuition.com",
    role: "student",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    createdAt: "2024-01-01",
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: UserRole) => {
    // Mock login - in real app, call API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser(mockUsers[role]);
  };

  const register = async (data: RegisterData) => {
    // Mock registration
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser({
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      role: data.role,
      phone: data.phone,
      createdAt: new Date().toISOString(),
    });
  };

  const logout = () => {
    setUser(null);
  };

  const setMockUser = (role: UserRole) => {
    setUser(mockUsers[role]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        setMockUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
