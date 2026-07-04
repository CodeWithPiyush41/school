import { useState, useEffect } from "react";
import { PhoneIcon, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Floating Button - Bottom Left */}
      <a
        href="https://wa.me/911112345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-background group flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        data-testid="button-whatsapp-float"
      >
        <PhoneIcon className="h-6 w-6" />
        <span className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* Back to Top Button - Bottom Right */}
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          "fixed bottom-6 right-6 z-40 rounded-full shadow-lg transition-all duration-300",
          showTop ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
        )}
        onClick={scrollToTop}
        aria-label="Back to top"
        data-testid="button-scroll-top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </>
  );
}
