import { notFound } from "next/navigation";
import { ExportedSiteView } from "../ExportedSiteView";
import { resolvePagePreviewNodes } from "@/lib/section-page-node-resolver";
import { readExportThemePreferences } from "@/lib/export-theme.server";
import {
  findExportedPage,
  loadExportedSiteProject,
  routeFromPathSegments,
} from "../../lib/site-loader";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
  params: Promise<{ path?: string[] }>;
};

export default async function ExportedSitePage({ params }: PageProps) {
  const resolved = await params;
  const route = routeFromPathSegments(resolved.path);
  const page = findExportedPage(route);
  if (!page) notFound();

  const theme = readExportThemePreferences();
  const project = loadExportedSiteProject();

  return (
    <ExportedSiteView
      nodes={resolvePagePreviewNodes(page)}
      siteLayoutVariant={theme.siteLayoutVariant ?? "default"}
      theme={project?.theme ?? null}
    />
  );
}
