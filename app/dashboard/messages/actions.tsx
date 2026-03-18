"use server";

import { z } from "zod";
import { db } from "@/lib/db/client";
import { messages, users } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { eq, and, desc } from "drizzle-orm";

const CreateMessageSchema = z.object({
  content: z.string().min(1, "Message cannot be empty").max(2000, "Message too long"),
  teamId: z.string().min(1),
});

export async function createMessageAction(input: { content: string; teamId: string }) {
  const session = await getAuthSession();
  if (!session) return { error: "Not authenticated" };

  const parseResult = CreateMessageSchema.safeParse(input);
  if (!parseResult.success) return { error: parseResult.error.errors[0]?.message ?? "Invalid input" };

  const { content, teamId } = parseResult.data;
  const userId = session.userId;

  await db.insert(messages).values({
    content,
    teamId,
    userId,
  });

  return { success: true };
}

export async function listMessagesAction(input: { teamId: string; limit?: number }) {
  const session = await getAuthSession();
  if (!session) return { error: "Not authenticated" };
  const { teamId, limit = 50 } = input;

  const result = await db
    .select({
      id: messages.id,
      content: messages.content,
      createdAt: messages.createdAt,
      userId: messages.userId,
      user: {
        id: users.id,
        firstName: users.firstName,
        lastName: users.lastName,
        email: users.email,
      },
    })
    .from(messages)
    .leftJoin(users, eq(messages.userId, users.id))
    .where(eq(messages.teamId, teamId))
    .orderBy(desc(messages.createdAt))
    .limit(limit);

  // Most recent first, reverse for chronological
  return { messages: result.reverse() };
}