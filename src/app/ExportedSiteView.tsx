"use client";

import type { CSSProperties } from "react";
import { RegistryPageRenderer } from "@/components/registry/RegistryPageRenderer";
import type { RegistryPageNode } from "@/lib/registry-component/types";
import { brandCssVarsFromTheme } from "@/lib/site-import/apply-imported-brand";
import { useCategoryFonts } from "@/lib/use-category-fonts";

export function ExportedSiteView({
  nodes,
  siteLayoutVariant = "default",
  theme,
}: {
  nodes: RegistryPageNode[];
  siteLayoutVariant?: "default" | "boxed" | "fullWidth";
  theme?: Record<string, unknown> | null;
}) {
  useCategoryFonts(theme);
  const brandStyle = brandCssVarsFromTheme(theme) as CSSProperties | undefined;
  return (
    <div className="site-preview-scroll min-h-0 flex-1 overflow-y-auto">
      <RegistryPageRenderer
        nodes={nodes}
        className="wb-site-root min-h-full w-full"
        style={brandStyle}
        siteLayoutVariant={siteLayoutVariant}
      />
    </div>
  );
}
