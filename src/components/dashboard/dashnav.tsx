import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Home,
  Users,
  Settings,
  BarChart,
  Sun,
  Moon,
  ChevronsUpDown,
  Check,
  Building2,
  LogOut,
  Sparkles,
  BadgeCheck,
  CreditCard,
  Bell,
  Monitor,
  Palette,
  Wand2,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useNavigate } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ModeToggle } from "@/components/mode-toggle";

const navigationLinks = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: <Home className="h-4 w-4" data-oid="zes_hek" />,
  },
  {
    label: "Analytics",
    to: "/dashboard/analytics",
    icon: <BarChart className="h-4 w-4" data-oid="mj2.si7" />,
  },
  {
    label: "Users",
    to: "/dashboard/users",
    icon: <Users className="h-4 w-4" data-oid="cili48w" />,
  },
  {
    label: "Settings",
    to: "/dashboard/settings",
    icon: <Settings className="h-4 w-4" data-oid="i5.d8:a" />,
  },
];

const organizations = [
  {
    label: "Acme Inc",
    value: "acme",
    icon: "/acme-logo.png",
  },
  {
    label: "Monsters Inc",
    value: "monsters",
    icon: "/monsters-logo.png",
  },
  {
    label: "Stark Industries",
    value: "stark",
    icon: "/stark-logo.png",
  },
];

const OrganizationSwitcher = () => {
  const { state } = useSidebar();
  const [open, setOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(organizations[0]);
  const isCollapsed = state === "collapsed";

  return (
    <SidebarMenu data-oid="oc5sn_d">
      <SidebarMenuItem data-oid="bhc57-9">
        <DropdownMenu open={open} onOpenChange={setOpen} data-oid="it-c_9w">
          <DropdownMenuTrigger asChild data-oid=":6ft9ef">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              data-oid="lj-n:96"
            >
              <Avatar className="h-8 w-8 rounded-lg" data-oid="fp0e3vw">
                <AvatarImage
                  src={selectedOrg.icon}
                  alt={selectedOrg.label}
                  data-oid="7mn8de1"
                />

                <AvatarFallback
                  className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"
                  data-oid="z4.pr5y"
                >
                  <Building2
                    className="h-4 w-4 text-white"
                    data-oid="6cww0fi"
                  />
                </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div
                  className="grid flex-1 text-left text-sm leading-tight"
                  data-oid="8i336iu"
                >
                  <span className="truncate font-semibold" data-oid="n1wufcw">
                    {selectedOrg.label}
                  </span>
                  <span className="truncate text-xs" data-oid="t8dk5cc">
                    Enterprise
                  </span>
                </div>
              )}
              {!isCollapsed && (
                <ChevronsUpDown
                  className="ml-auto h-4 w-4"
                  data-oid="dpuqfp0"
                />
              )}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isCollapsed ? "right" : "bottom"}
            align={isCollapsed ? "start" : "end"}
            sideOffset={4}
            data-oid="8myiyr7"
          >
            <Command data-oid="f.tclzy">
              <CommandInput
                placeholder="Search organization..."
                data-oid=".ti-thb"
              />

              <CommandList data-oid="b-3i.ri">
                <CommandEmpty data-oid="t-jckq5">
                  No organization found.
                </CommandEmpty>
                <CommandGroup data-oid="8:gg.64">
                  {organizations.map((org) => (
                    <CommandItem
                      key={org.value}
                      onSelect={() => {
                        setSelectedOrg(org);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2"
                      data-oid="_:pbs2e"
                    >
                      <Avatar className="h-8 w-8 rounded-lg" data-oid="xq7sb:n">
                        <AvatarImage
                          src={org.icon}
                          alt={org.label}
                          data-oid="kvov6v2"
                        />

                        <AvatarFallback
                          className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"
                          data-oid="1_lt5rb"
                        >
                          <Building2
                            className="h-4 w-4 text-white"
                            data-oid="8b7_xvp"
                          />
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1" data-oid="t-ri9ly">
                        <span className="font-medium" data-oid="79suiu.">
                          {org.label}
                        </span>
                        <span
                          className="text-xs text-muted-foreground"
                          data-oid="bdknq6q"
                        >
                          Enterprise
                        </span>
                      </div>
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedOrg.value === org.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                        data-oid="we44awb"
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AnnouncementCard = () => {
  return (
    <Dialog data-oid="df6.cko">
      <DialogTrigger asChild data-oid="u-er6us">
        <div
          className="relative cursor-pointer hover:opacity-90 transition-opacity"
          data-oid="nr0pyu-"
        >
          <div className="absolute -top-1 -right-1" data-oid="lqd5em1">
            <span className="relative flex h-3 w-3" data-oid="zqpai_d">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
                data-oid="bsupafk"
              ></span>
              <span
                className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"
                data-oid="tje2xe1"
              ></span>
            </span>
          </div>
          <Card data-oid="jy5w81n">
            <CardHeader className="p-3" data-oid="epmz64t">
              <CardTitle className="text-sm font-medium" data-oid="m4q0yfh">
                New Features
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0" data-oid="i_21wbc">
              <p className="text-xs text-muted-foreground" data-oid="t9_3d4r">
                Check out our latest platform updates!
              </p>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent data-oid="wunzsoa">
        <DialogHeader data-oid="m90-odr">
          <DialogTitle data-oid="thk6e_b">Latest Updates</DialogTitle>
        </DialogHeader>
        <Carousel className="w-full max-w-xs mx-auto" data-oid="5gn05k_">
          <CarouselContent data-oid="t.e4dcb">
            {[1, 2, 3].map((_, index) => (
              <CarouselItem key={index} data-oid="rl:8o8x">
                <Card data-oid="y0a-ztf">
                  <CardContent
                    className="flex aspect-square items-center justify-center p-6"
                    data-oid="uki8ka-"
                  >
                    <span className="text-4xl font-semibold" data-oid="f23ibh_">
                      Feature {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious data-oid="8mgr63o" />
          <CarouselNext data-oid="s-sdg-0" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

const UserSwitcher = () => {
  const { state, isMobile } = useSidebar();
  const navigate = useNavigate();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarMenu data-oid="8z7bm6p">
      <SidebarMenuItem data-oid="l2..1sv">
        <DropdownMenu data-oid="y4pfr9i">
          <DropdownMenuTrigger asChild data-oid="t.2t4wm">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              data-oid="4xnt8d5"
            >
              <Avatar className="h-8 w-8 rounded-lg" data-oid="ees_4rb">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  data-oid="14iph7p"
                />

                <AvatarFallback className="rounded-lg" data-oid="a0a6lju">
                  SC
                </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div
                  className="grid flex-1 text-left text-sm leading-tight"
                  data-oid=":uo08x9"
                >
                  <span className="truncate font-semibold" data-oid="n99dylj">
                    shadcn
                  </span>
                  <span className="truncate text-xs" data-oid="p05ydbg">
                    m@example.com
                  </span>
                </div>
              )}
              {!isCollapsed && (
                <ChevronsUpDown className="ml-auto size-4" data-oid="i:80ygm" />
              )}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile || isCollapsed ? "right" : "bottom"}
            align="end"
            sideOffset={4}
            data-oid="ou043e4"
          >
            <DropdownMenuLabel className="p-0 font-normal" data-oid="_ob0a9v">
              <div
                className="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                data-oid="0dal_3z"
              >
                <Avatar className="h-8 w-8 rounded-lg" data-oid="pes9bzv">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    data-oid="5s9--.i"
                  />

                  <AvatarFallback className="rounded-lg" data-oid="9e:nr_x">
                    SC
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1" data-oid="p01sg_o">
                  <span className="font-semibold" data-oid="2.5xq_o">
                    shadcn
                  </span>
                  <span
                    className="text-xs text-muted-foreground"
                    data-oid=".9ksgk:"
                  >
                    m@example.com
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator data-oid="vjupd_s" />
            <DropdownMenuGroup data-oid="abw4g1u">
              <DropdownMenuItem data-oid="kss:uu-">
                <Sparkles className="size-4 mr-2" data-oid="-lcod_o" />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator data-oid="c:ruwvy" />
            <DropdownMenuGroup data-oid="d4t6x2w">
              <DropdownMenuItem data-oid="o.2y7qt">
                <BadgeCheck className="size-4 mr-2" data-oid="q825gur" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem data-oid="7f9fl7y">
                <CreditCard className="size-4 mr-2" data-oid="58lc00t" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem data-oid="gmnilyl">
                <Bell className="size-4 mr-2" data-oid="a.054h9" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator data-oid="d-r9fsn" />
            <DropdownMenuItem
              onClick={() => navigate({ to: "/" })}
              data-oid="xufzd9o"
            >
              <LogOut className="size-4 mr-2" data-oid=":suqaf_" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const NavigationLink = ({ link, isCollapsed }) => {
  return (
    <HoverCard openDelay={200} data-oid="nb7eaiz">
      <HoverCardTrigger asChild data-oid="mmtbcsr">
        <Link
          key={link.to}
          to={link.to}
          className={cn(
            "flex items-center rounded-lg text-muted-foreground transition-all hover:text-foreground",
            "data-[active]:bg-gradient-to-r data-[active]:from-blue-500/10 data-[active]:to-purple-500/10 data-[active]:text-blue-600 dark:data-[active]:text-blue-400",
            isCollapsed
              ? "h-10 w-10 justify-center mx-auto"
              : "w-full gap-3 px-3 py-2",
          )}
          activeProps={{
            "data-active": true,
          }}
          data-oid=":_n:92n"
        >
          {React.cloneElement(link.icon, {
            className: cn(
              "transition-all",
              isCollapsed ? "h-5 w-5" : "h-4 w-4",
            ),
          })}
          {!isCollapsed && (
            <span className="flex-1 whitespace-nowrap" data-oid="bhovah5">
              {link.label}
            </span>
          )}
        </Link>
      </HoverCardTrigger>
      {isCollapsed && (
        <HoverCardContent side="right" className="w-40 p-2" data-oid="j77k_0a">
          <div className="flex flex-col space-y-1" data-oid=":xxvihk">
            <p className="text-sm font-medium" data-oid="w3-g57z">
              {link.label}
            </p>
            <p className="text-xs text-muted-foreground" data-oid="ztg0ort">
              Navigate to {link.label.toLowerCase()}
            </p>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export const DashNav = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar variant="inset" collapsible="icon" data-oid="1ew6p5f">
      <SidebarHeader data-oid="30u4fbc">
        <OrganizationSwitcher data-oid="vnz5fgc" />
        <Separator data-oid="yqd.auy" />
      </SidebarHeader>
      <SidebarContent data-oid="t_tnofg">
        <SidebarGroup data-oid="ov-x4g4">
          <nav className="flex flex-col items-center gap-1" data-oid="kt-7qlg">
            {navigationLinks.map((link) => (
              <NavigationLink
                key={link.to}
                link={link}
                isCollapsed={isCollapsed}
                data-oid="d1:rm:8"
              />
            ))}
          </nav>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter data-oid="rnvgzke">
        <div
          className={cn(
            "flex flex-col items-center gap-4",
            isCollapsed ? "px-0" : "p-4",
          )}
          data-oid="8xgldbn"
        >
          <ModeToggle iconOnly={isCollapsed} data-oid="zzs23ct" />
          {!isCollapsed && (
            <>
              <Separator data-oid="ojryh_d" />
              <AnnouncementCard data-oid="w33un21" />
            </>
          )}
        </div>
        <UserSwitcher data-oid="ial:hxy" />
      </SidebarFooter>
    </Sidebar>
  );
};
