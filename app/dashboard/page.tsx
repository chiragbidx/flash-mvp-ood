import { redirect } from "next/navigation";

export default function DashboardPage() {
  // Always redirect to /dashboard/overview from root dashboard
  redirect("/dashboard/overview");
}