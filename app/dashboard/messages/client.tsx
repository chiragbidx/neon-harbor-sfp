"use client";

import { useEffect, useState, useRef } from "react";
import { createMessageAction, listMessagesAction } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function MessagesClient({ teamId }: { teamId: string }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  // Fetch messages on mount and after send
  async function fetchMessages() {
    setLoading(true);
    setError(null);
    const res = await listMessagesAction({ teamId });
    setLoading(false);
    if ("messages" in res) {
      setMessages(res.messages);
    } else if ("error" in res) {
      setError(res.error);
    }
  }

  useEffect(() => {
    fetchMessages();
    // Poll for new messages every 10s
    const interval = setInterval(fetchMessages, 10000);
    return () => clearInterval(interval);
  }, [teamId]);

  // Scroll to bottom on messages update
  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    if (!content.trim()) return;
    setSending(true);
    setError(null);

    const res = await createMessageAction({ content, teamId });
    setSending(false);

    if ("success" in res) {
      setContent("");
      fetchMessages();
    } else if ("error" in res) {
      setError(res.error);
    }
  }

  return (
    <div className="flex flex-col max-w-2xl mx-auto w-full pt-10">
      <h1 className="text-2xl font-bold mb-4">Team Messages</h1>
      <div className={cn("mb-6 flex-1 h-[400px] overflow-y-auto bg-muted/40 rounded-xl p-4 border", loading && "opacity-70")}>
        {error && <div className="text-destructive mb-2">{error}</div>}
        {messages.length === 0 && !loading && <div className="text-muted-foreground px-2">No messages yet. Start the conversation!</div>}
        {messages.map((msg) => (
          <div key={msg.id} className="mb-3 flex flex-col">
            <span className="font-medium text-primary">{msg.user?.firstName} {msg.user?.lastName}</span>
            <span className="text-sm text-muted-foreground">{new Date(msg.createdAt).toLocaleString()}</span>
            <span className="mt-1 px-2">{msg.content}</span>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex gap-2 items-end">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={2}
          placeholder="Type your message…"
          className="flex-1 min-h-[44px]"
          disabled={sending}
          onKeyDown={e => {
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <Button onClick={handleSend} disabled={sending || !content.trim()}>
          {sending ? "Sending…" : "Send"}
        </Button>
      </div>
    </div>
  );
}