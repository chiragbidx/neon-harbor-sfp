# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

- 2024-06-11: Added team messaging feature.
  - Added "messages" table to Drizzle schema and migration.
  - Implemented server actions for creating and listing messages.
  - Built UI for messages list and send form with polling and error handling.
  - Updated dashboard sidebar navigation for messaging.
  - Files: lib/db/schema.ts, drizzle/0003_add_messages_table.sql, drizzle/meta/_journal.json, app/dashboard/messages/page.tsx, app/dashboard/messages/client.tsx, app/dashboard/messages/actions.tsx, components/dashboard/sidebar-nav.tsx

 - Respond with confirm, no changed needed.