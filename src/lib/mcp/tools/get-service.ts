import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../content";

export default defineTool({
  name: "get_service",
  title: "Get service details",
  description:
    "Get the details of one Estúdio Akedah service by its slug (e.g. social-media, trafego-pago).",
  inputSchema: {
    slug: z.string().trim().min(1).describe("Service slug, as returned by list_services."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const service = services.find((s) => s.slug === slug.toLowerCase());
    if (!service) {
      throw new ToolError(
        `No service with slug "${slug}". Available: ${services.map((s) => s.slug).join(", ")}.`,
      );
    }
    const text = [
      `${service.name} — ${service.eyebrow}`,
      service.tagline,
      "",
      "O que inclui:",
      ...service.highlights.map((h) => `- ${h}`),
      "",
      service.url,
    ].join("\n");
    return { content: [{ type: "text", text }], structuredContent: { service } };
  },
});
