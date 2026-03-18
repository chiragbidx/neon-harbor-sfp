import { redirect } from "next/navigation";

export default async function DashboardDefault() {
  redirect("/dashboard/overview");
  return null;
}