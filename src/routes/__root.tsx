import { createRootRoute, Outlet, useMatches } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TanstackQueryLayout from "../integrations/tanstack-query/layout";
import { Provider as TanstackQueryProvider } from "../integrations/tanstack-query/provider";

export const Route = createRootRoute({
  component: () => {
    const matches = useMatches();
    // Check if any of the matched routes starts with '/dashboard'
    const isDashboardRoute = matches.some((match) =>
      match.routeId.startsWith("/dashboard"),
    );

    return (
      <ThemeProvider defaultTheme="system" data-oid="mv:6gdw">
        <TanstackQueryProvider data-oid="v--x20j">
          <div
            className="min-h-screen flex flex-col bg-background"
            data-oid="w4qjb6c"
          >
            {!isDashboardRoute && <Navbar data-oid="sbg:2x8" />}
            <main className="flex-1" data-oid=".08zwzx">
              <Outlet data-oid="h58i5q6" />
            </main>
            {!isDashboardRoute && <Footer data-oid="dd:4d.4" />}
            <TanstackQueryLayout data-oid=":i-tamw" />
          </div>
        </TanstackQueryProvider>
      </ThemeProvider>
    );
  },
});
