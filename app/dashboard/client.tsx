"use client";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <h1 className="text-3xl font-bold mb-3">ChatNest Dashboard</h1>
      <p className="mb-6 text-muted-foreground max-w-xl text-center">
        Welcome to ChatNest! Start a new conversation or join a channel to connect with your team.
      </p>
    </div>
  );
}