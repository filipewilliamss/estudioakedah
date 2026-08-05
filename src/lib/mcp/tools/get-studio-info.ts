import { defineTool } from "@lovable.dev/mcp-js";
import { AKEDAH_EMAIL, SITE_URL, WHATSAPP_URL, about, method } from "../content";

export default defineTool({
  name: "get_studio_info",
  title: "Get studio info",
  description:
    "Get Estúdio Akedah's positioning, the 5 stages of the Método Akedah, and public contact channels.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = [
      `${about.name} — ${about.positioning}`,
      `Fundador: ${about.founder}. ${about.coverage}.`,
      "",
      "Método Akedah:",
      ...method.map((m) => `- ${m.stage}: ${m.description}`),
      "",
      `Site: ${SITE_URL}`,
      `Nossa história: ${about.aboutUrl}`,
      `Podcast: ${about.podcastUrl}`,
      `E-mail: ${AKEDAH_EMAIL}`,
      `WhatsApp: ${WHATSAPP_URL}`,
    ].join("\n");
    return {
      content: [{ type: "text", text }],
      structuredContent: {
        about,
        method,
        contact: { email: AKEDAH_EMAIL, whatsapp: WHATSAPP_URL, site: SITE_URL },
      },
    };
  },
});
