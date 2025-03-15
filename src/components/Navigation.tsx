
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          AK
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            to="/education"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Education
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  to="/"
                  className="text-lg font-medium py-2 px-4 rounded hover:bg-muted transition-colors"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-lg font-medium py-2 px-4 rounded hover:bg-muted transition-colors"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className="text-lg font-medium py-2 px-4 rounded hover:bg-muted transition-colors"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
                <Link
                  to="/experience"
                  className="text-lg font-medium py-2 px-4 rounded hover:bg-muted transition-colors"
                  onClick={closeMobileMenu}
                >
                  Experience
                </Link>
                <Link
                  to="/education"
                  className="text-lg font-medium py-2 px-4 rounded hover:bg-muted transition-colors"
                  onClick={closeMobileMenu}
                >
                  Education
                </Link>
                <Link
                  to="/contact"
                  className="text-lg font-medium py-2 px-4 rounded hover:bg-muted transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </nav>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
                className="absolute top-4 right-4"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close Menu</span>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
