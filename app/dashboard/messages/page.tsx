import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teams, teamMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import MessagesClient from "./client";

export default async function MessagesPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Find team for user (simple: first team they belong to)
  const teamsJoined = await db
    .select({ id: teamMembers.teamId })
    .from(teamMembers)
    .where(eq(teamMembers.userId, session.userId));

  if (!teamsJoined.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        <p className="mb-6 text-muted-foreground">
          You are not in any team yet.<br /> Get started by joining a team to access messaging.
        </p>
      </div>
    );
  }

  // Use first team
  const teamId = teamsJoined[0].id;

  // Pass teamId as prop for messaging view
  return <MessagesClient teamId={teamId} />;
}