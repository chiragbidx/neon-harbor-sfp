import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";

export default async function NewMessagePage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <h1 className="text-2xl font-bold mb-3">Start a New Message</h1>
      <p className="text-muted-foreground max-w-md text-center">
        This is where you’ll be able to start a direct conversation with a teammate.
      </p>
    </div>
  );
}