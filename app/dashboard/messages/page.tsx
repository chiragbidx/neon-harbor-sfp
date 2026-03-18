import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function MessagesPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <h1 className="text-2xl font-bold mb-3">Messages</h1>
      <div className="mb-6 text-center text-muted-foreground">
        <h2 className="text-lg font-semibold mb-1">No Conversations Yet</h2>
        <p className="mb-4">Start a new message to begin collaborating with your colleagues.</p>
        <Button asChild>
          <Link href="/dashboard/messages/new">New Message</Link>
        </Button>
      </div>
    </div>
  );
}