import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the commercial solutions offered by Estúdio Akedah, with slug, tagline and page URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const summary = services
      .map((s) => `- ${s.name} (${s.slug}): ${s.tagline} — ${s.url}`)
      .join("\n");
    return {
      content: [{ type: "text", text: summary }],
      structuredContent: { services },
    };
  },
});
