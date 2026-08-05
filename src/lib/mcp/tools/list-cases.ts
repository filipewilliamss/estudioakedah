import { defineTool } from "@lovable.dev/mcp-js";
import { cases } from "../content";

export default defineTool({
  name: "list_cases",
  title: "List cases",
  description: "List the public portfolio cases published on the Estúdio Akedah site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = cases
      .map((c) => `- ${c.title} (${c.client}): ${c.subtitle} — ${c.url}`)
      .join("\n");
    return { content: [{ type: "text", text }], structuredContent: { cases } };
  },
});
