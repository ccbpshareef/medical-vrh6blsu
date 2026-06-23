import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ExportedSiteProviders } from "@/components/export/ExportedSiteProviders";
import { readExportThemePreferences } from "@/lib/export-theme.server";
import { getExportThemeBootScript } from "@/theme/theme-boot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medical",
  description: "Exported site preview",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = readExportThemePreferences();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: getExportThemeBootScript(theme) }} />
      </head>
      <body className="flex h-full flex-col overflow-hidden bg-[var(--wb-background)] text-[var(--wb-foreground)]">
        <ExportedSiteProviders themeColorId={theme.themeColorId} colorMode={theme.colorMode}>
          {children}
        </ExportedSiteProviders>
      </body>
    </html>
  );
}
