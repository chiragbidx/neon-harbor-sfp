import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";

export default async function NewChannelPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <h1 className="text-2xl font-bold mb-3">Create a New Channel</h1>
      <p className="text-muted-foreground max-w-md text-center">
        Start by creating a channel for your team’s discussions and collaboration.
      </p>
    </div>
  );
}