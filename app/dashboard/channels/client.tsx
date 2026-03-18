"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ChannelsClient() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <h1 className="text-2xl font-bold mb-3">Channels</h1>
      <div className="mb-6 text-center text-muted-foreground">
        <h2 className="text-lg font-semibold mb-1">No Channels Created</h2>
        <p className="mb-4">Create a channel to organize team discussions.</p>
        <Button asChild>
          <Link href="/dashboard/channels/new">Create Channel</Link>
        </Button>
      </div>
    </div>
  );
}