import { defineMcp, auth } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getServiceTool from "./tools/get-service";
import listCasesTool from "./tools/list-cases";
import getStudioInfoTool from "./tools/get-studio-info";

export default defineMcp({
  name: "estudio-akedah",
  title: "Estudio Akedah",
  version: "0.1.0",
  instructions:
    "Tools for Estúdio Akedah, a Brazilian commercial strategy studio. Use `list_services` and `get_service` for the solutions offered, `list_cases` for portfolio cases, and `get_studio_info` for positioning, the Método Akedah stages, and contact channels.",
  auth: auth.oauth.issuer({
    issuer: "https://xecizpnumaglmyucyndq.supabase.co/auth/v1",
    acceptedAudiences: ["authenticated"],
  }),

  tools: [listServicesTool, getServiceTool, listCasesTool, getStudioInfoTool],
});

