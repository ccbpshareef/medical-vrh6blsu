import Link from "next/link";
import { listExportedRoutes } from "../lib/site-loader";

export default function NotFound() {
  const routes = listExportedRoutes();
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-sm text-[var(--wb-muted)]">This route is not part of the exported site.</p>
      <div className="flex flex-wrap justify-center gap-2">
        {routes.map((route) => (
          <Link
            key={route}
            href={route}
            className="rounded-full border border-[var(--wb-border)] px-3 py-1 text-xs hover:border-[var(--wb-primary)]/40"
          >
            {route === "/" ? "Home" : route}
          </Link>
        ))}
      </div>
    </main>
  );
}
