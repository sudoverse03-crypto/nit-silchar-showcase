import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Theme", href: "#theme" },
  { name: "Speakers", href: "#speakers" },
  { name: "Past Editions", href: "#past-editions" },
  { name: "Contact", href: "#register" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold">
              <span className="text-primary">TEDx</span>
              <span className="text-foreground">NITSilchar</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Register Button */}
          <Button
            onClick={() => scrollToSection("#register")}
            className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold uppercase tracking-wide"
          >
            Register Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wide text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#register")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold uppercase tracking-wide w-full mt-2"
              >
                Register Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
