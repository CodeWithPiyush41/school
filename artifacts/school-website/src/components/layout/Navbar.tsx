import { Link, useLocation } from "wouter";
import { Shield, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admission", label: "Admission" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border shadow-sm py-2"
          : "bg-background border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-md group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <Shield className="h-6 w-6" />
          </div>
          <span className="font-serif font-bold text-xl md:text-2xl text-primary dark:text-white tracking-tight">
            Greenfield Academy
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 md:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-primary/5",
                location === link.href
                  ? "text-primary dark:text-white bg-primary/5 font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-primary"
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <div className="hidden sm:block">
            <Link href="/admission">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-sm">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col border-l-border">
              <div className="flex items-center gap-2 mb-8">
                <Shield className="h-6 w-6 text-primary" />
                <SheetTitle className="font-serif text-lg text-primary">Greenfield Academy</SheetTitle>
              </div>
              
              <nav className="flex flex-col gap-2 flex-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 text-lg font-medium rounded-md transition-colors",
                        location === link.href
                          ? "bg-primary/10 text-primary dark:text-white font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              
              <div className="mt-auto pt-6 border-t flex flex-col gap-4">
                <SheetClose asChild>
                  <Link href="/admission">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6">
                      Apply Now
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
