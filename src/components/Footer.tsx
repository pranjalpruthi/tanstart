import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t" data-oid="fiegbm-">
      <div className="container mx-auto px-4 py-6" data-oid="in.43ir">
        <div
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
          data-oid="i:lqda:"
        >
          {/* Brand and Copyright */}
          <div
            className="flex items-center gap-2 text-sm text-muted-foreground"
            data-oid="p3xpmvc"
          >
            <span data-oid="sd6zjmf">© {new Date().getFullYear()}</span>
            <Link
              to="/"
              className="font-semibold text-foreground hover:text-primary transition-colors"
              data-oid="upyg8uw"
            >
              Starter
            </Link>
            <span className="flex items-center gap-1" data-oid="h38jhdo">
              Built with{" "}
              <Heart className="h-4 w-4 text-red-500" data-oid="odck8hk" /> for
              Devs
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6" data-oid="cdi-3b:">
            <Link
              to="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-oid="aq5jb7-"
            >
              About
            </Link>
            <Link
              to="/dashboard"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-oid="o_6xmgf"
            >
              Read
            </Link>

            {/* Social Links */}
            <div
              className="flex items-center gap-4 border-l pl-6"
              data-oid="cd33zyq"
            >
              <a
                href="https://github.com/pranjalpruthi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-oid="g3:e4u7"
              >
                <Github className="h-4 w-4" data-oid="072sjob" />
              </a>
              <a
                href="https://x.com/pranjalpruthi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-oid=".aqaegg"
              >
                <Twitter className="h-4 w-4" data-oid="x_tzady" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranjal-pruthi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-oid="lwl.ew-"
              >
                <Linkedin className="h-4 w-4" data-oid="1pdm8pi" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
