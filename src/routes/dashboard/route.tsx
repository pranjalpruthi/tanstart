import {
  createFileRoute,
  Outlet,
  useMatches,
  useNavigate,
} from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DashNav } from "@/components/dashboard/dashnav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardBreadcrumbs() {
  const matches = useMatches();
  const navigate = useNavigate();

  // Filter out root path and get meaningful route segments
  const breadcrumbs = matches
    .filter((match) => match.pathname !== "/")
    .map((match) => ({
      label: match.pathname.split("/").pop() || "Dashboard",
      path: match.pathname,
    }));

  return (
    <Breadcrumb data-oid="er07psb">
      <BreadcrumbList data-oid="dtx9:xc">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.path}>
            {index > 0 && <BreadcrumbSeparator data-oid="fw.z9qw" />}
            <BreadcrumbItem data-oid="6p8k7ft">
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage data-oid="it_3l6y">
                  {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  onClick={() => navigate({ to: crumb.path })}
                  className="cursor-pointer"
                  data-oid="-6umu-r"
                >
                  {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function DashboardLayout() {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="ui-theme"
      data-oid="9yssqco"
    >
      <SidebarProvider data-oid="28gu8ur">
        <div className="flex min-h-screen w-full" data-oid="_6:8xc4">
          <DashNav data-oid="8s8r_oi" />
          <div className="flex-1" data-oid="1rxp59b">
            <SidebarInset className="min-h-screen" data-oid="ugc7shl">
              <main
                className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6 w-full"
                data-oid="8s7gvs7"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="q4a32xs"
                >
                  <div className="flex items-center gap-4" data-oid="8ukpp3m">
                    <SidebarTrigger data-oid="og6x47." />
                    <DashboardBreadcrumbs data-oid="2lnq5mo" />
                  </div>
                </div>
                <Outlet data-oid="ciz0fuc" />
              </main>
            </SidebarInset>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
