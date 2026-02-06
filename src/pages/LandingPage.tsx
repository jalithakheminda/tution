import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  BookOpen,
  MessageSquare,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Academy Management",
    description:
      "Register and manage multiple academies with comprehensive admin dashboards.",
  },
  {
    icon: Users,
    title: "Teacher & Student Portal",
    description:
      "Dedicated portals for teachers and students with role-based access control.",
  },
  {
    icon: BookOpen,
    title: "Class Scheduling",
    description:
      "Easy class creation, scheduling, and enrollment management system.",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description:
      "Built-in messaging system for seamless teacher-student-parent communication.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Comprehensive analytics and reporting for tracking performance and growth.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with role-based permissions and data protection.",
  },
];

const testimonials = [
  {
    name: "Dr. Amina Hassan",
    role: "Academy Director",
    content:
      "This system transformed how we manage our academy. Student enrollment and teacher coordination became effortless.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Math Teacher",
    content:
      "The task management and communication features help me stay connected with all my students and parents.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    role: "Parent",
    content:
      "I can easily track my child's progress and communicate with teachers. Best education platform we've used!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Academies" },
  { value: "10K+", label: "Teachers" },
  { value: "100K+", label: "Students" },
  { value: "99.9%", label: "Uptime" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">TuitionHub</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 md:py-32">
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-1.5 text-sm backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-success" />
              Trusted by 500+ academies worldwide
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Manage Your Tuition Academy{" "}
              <span className="text-gradient-primary">Effortlessly</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              A comprehensive platform for academies, teachers, and students.
              Streamline enrollment, scheduling, communication, and more.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="xl" variant="hero" asChild>
                <Link to="/register">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="hero-outline" asChild>
                <Link to="/login">View Demo</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold md:text-3xl">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-academy/10 blur-3xl" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed specifically for tuition management
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-muted/50 py-24">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Loved by Educators Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our users have to say about TuitionHub
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-warning text-warning"
                    />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 text-center md:p-20">
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to Transform Your Academy?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Join thousands of academies already using TuitionHub
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="xl"
                  variant="accent"
                  asChild
                >
                  <Link to="/register">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold">TuitionHub</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Support</a>
              <a href="#" className="hover:text-foreground">Contact</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 TuitionHub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
