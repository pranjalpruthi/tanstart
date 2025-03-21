import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      data-oid="wj_wwkc"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:60px_60px] dark:bg-grid-slate-400/[0.05]"
        data-oid="3:896oa"
      />

      <div
        className="absolute inset-0 flex items-center justify-center bg-white dark:bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        data-oid="_15039e"
      />

      {/* Content */}
      <section
        className="relative w-full py-12 md:py-24 lg:py-32"
        data-oid="4xk--i5"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container mx-auto px-4 md:px-6 max-w-[1200px]"
          data-oid="xp.4-74"
        >
          <motion.div
            variants={item}
            className="flex flex-col items-center space-y-6 text-center"
            data-oid=".d2413r"
          >
            <motion.div
              variants={item}
              className="flex flex-wrap justify-center gap-2 pt-4"
              data-oid="icm02ue"
              key="olk-GHMG"
            >
              {[
                "Tanstack Router",
                "Shadcn UI",
                "Tailwind CSS",
                "TypeScript",
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-xs"
                  data-oid="9aftx5u"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>
            <Badge variant="outline" className="mb-2" data-oid="q8fkw-o">
              🚀 Built with modern tech stack
            </Badge>
            <h1
              className="font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              data-oid="ck2xsc-"
            >
              Your Modern Dashboard
              <span
                className="block bg-gradient-to-r from-primary via-primary/75 to-primary/50 bg-clip-text text-transparent"
                data-oid=":t6hfjx"
              >
                Starter Template
              </span>
            </h1>
            <motion.p
              variants={item}
              className="mx-auto max-w-[600px] text-muted-foreground text-sm md:text-base lg:text-lg"
              data-oid="mydt8e9"
            >
              Built with Tanstack Router, Shadcn UI, and modern best practices.
              Perfect for your next project.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
              data-oid="p7_let5"
            >
              <Link to="/dashboard" data-oid="9x0axts">
                <Button size="lg" className="gap-2 h-11" data-oid="r8reyh7">
                  Get Started
                  <ArrowRight className="h-4 w-4" data-oid="ml83zer" />
                </Button>
              </Link>
              <a
                href="https://github.com/pranjalpruthi"
                target="_blank"
                rel="noreferrer noopener"
                data-oid="lmvqlbl"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 h-11"
                  data-oid="j4o592n"
                >
                  <Github className="h-4 w-4" data-oid="89yjr-v" />
                  GitHub
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
