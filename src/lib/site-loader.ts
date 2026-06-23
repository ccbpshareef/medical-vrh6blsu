import fs from "node:fs";
import path from "node:path";
import type { SitePage } from "@/lib/page-builder-state";
import { readSiteProjectFromExportDir } from "@/lib/site-folder-io";

export function normalizeSiteRoute(route: string): string {
  const trimmed = route.trim();
  if (!trimmed || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

export function routeFromPathSegments(segments?: string[]): string {
  if (!segments || segments.length === 0) return "/";
  return normalizeSiteRoute(segments.join("/"));
}

export function loadExportedSiteProject() {
  return readSiteProjectFromExportDir(/* turbopackIgnore: true */ process.cwd());
}

export function findExportedPage(route: string): SitePage | undefined {
  const project = loadExportedSiteProject();
  if (!project) return undefined;
  const normalized = normalizeSiteRoute(route);
  return project.pages.find((page) => normalizeSiteRoute(page.route) === normalized);
}

export function listExportedRoutes(): string[] {
  const project = loadExportedSiteProject();
  if (!project) return ["/"];
  return project.pages.map((page) => normalizeSiteRoute(page.route));
}

export function readExportMeta(): Record<string, unknown> | null {
  const metaPath = path.join(/* turbopackIgnore: true */ process.cwd(), "export-meta.json");
  if (!fs.existsSync(metaPath)) return null;
  try {
    return JSON.parse(fs.readFileSync(metaPath, "utf8")) as Record<string, unknown>;
  } catch {
    return null;
  }
}
