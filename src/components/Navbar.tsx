import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import {
  BookOpen,
  Code2,
  Github,
  Home,
  LayoutDashboard,
  Menu,
  Package,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      data-oid="p:8p87s"
    >
      <div className="container mx-auto px-4" data-oid="c-j4mkl">
        <div
          className="flex h-16 items-center justify-between"
          data-oid="bk0.voa"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
            data-oid="f.n:-3n"
          >
            <Link to="/" className="flex items-center gap-2" data-oid="w8ofe2y">
              <Package className="h-6 w-6 text-primary" data-oid="y9.v6.v" />
              <span className="text-xl font-bold" data-oid="1c3fpj:">
                TanStack
                <span className="text-primary" data-oid="yfqpzbc">
                  Start
                </span>
              </span>
            </Link>
            <Badge
              variant="secondary"
              className="hidden sm:inline-flex"
              data-oid="5oy4aei"
            >
              v1.0.0
            </Badge>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center space-x-1"
            data-oid="dj_vbrl"
          >
            <Link to="/" data-oid="u87uaea">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                data-oid="wxojdsk"
              >
                <Home className="h-4 w-4" data-oid="1.8cf1o" />
                <span data-oid="5fodopy">Home</span>
              </Button>
            </Link>
            <Link to="/dashboard" data-oid="-y796f1">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                data-oid=":ctw6re"
              >
                <LayoutDashboard className="h-4 w-4" data-oid="ff84q7_" />
                <span data-oid="didm_5f">Dashboard</span>
              </Button>
            </Link>
            <a
              href="https://tanstack.com/router/latest/docs/framework/react/overview"
              target="_blank"
              rel="noopener noreferrer"
              data-oid="04lq7qo"
            >
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                data-oid="urrs6g:"
              >
                <BookOpen className="h-4 w-4" data-oid="sj60323" />
                <span data-oid="q1epu5r">Docs</span>
              </Button>
            </a>
            <a
              href="https://github.com/your-username/tanstack-start"
              target="_blank"
              rel="noopener noreferrer"
              data-oid="i3tfz0y"
            >
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                data-oid=":9wi8.s"
              >
                <Github className="h-4 w-4" data-oid="2u4w:a2" />
                <span data-oid="uk_rpkx">GitHub</span>
              </Button>
            </a>
            <Separator
              orientation="vertical"
              className="mx-2 h-6"
              data-oid="2yg:lcq"
            />

            <ModeToggle data-oid="c_..sdg" />
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden" data-oid="cav:vjy">
            <ModeToggle data-oid="c0z9:n." />
            <Sheet data-oid="n_:erg9">
              <SheetTrigger asChild data-oid="0llux-i">
                <Button variant="ghost" size="icon" data-oid=".r-zlr8">
                  <Menu className="h-5 w-5" data-oid="ymhwmjv" />
                </Button>
              </SheetTrigger>
              <SheetContent data-oid="6gkkvk4">
                <SheetHeader data-oid="yz3aun.">
                  <SheetTitle
                    className="flex items-center gap-2"
                    data-oid="4w62iyo"
                  >
                    <Package
                      className="h-5 w-5 text-primary"
                      data-oid="zu:x.04"
                    />

                    <span data-oid=".8e7inq">TanStack Start</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 pt-6" data-oid="3u3u:6k">
                  <Link to="/" data-oid="a211p35">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full justify-start gap-2"
                      data-oid="69xdepd"
                    >
                      <Home className="h-4 w-4" data-oid="ci.9z93" />
                      <span data-oid="n505-m8">Home</span>
                    </Button>
                  </Link>
                  <Link to="/dashboard" data-oid="rgyqtsy">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full justify-start gap-2"
                      data-oid="xjiydz-"
                    >
                      <LayoutDashboard className="h-4 w-4" data-oid="dxhs9:3" />
                      <span data-oid="b7g9fu:">Dashboard</span>
                    </Button>
                  </Link>
                  <Separator className="my-2" data-oid="rptp-vz" />
                  <a
                    href="https://tanstack.com/router/latest/docs/framework/react/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-oid=":2.pp0e"
                  >
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full justify-start gap-2"
                      data-oid="r0bkk7i"
                    >
                      <BookOpen className="h-4 w-4" data-oid="u5myrwd" />
                      <span data-oid="fwhuiln">Documentation</span>
                    </Button>
                  </a>
                  <a
                    href="https://github.com/your-username/tanstack-start"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-oid="4o-7eo7"
                  >
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full justify-start gap-2"
                      data-oid="wvgwdtg"
                    >
                      <Github className="h-4 w-4" data-oid="ki8298s" />
                      <span data-oid="mgdw0fp">GitHub</span>
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
