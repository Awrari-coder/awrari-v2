import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";

export default function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact", isScroll: true },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location === href;
    }
    return location.startsWith(href);
  };

  const handleNavClick = (href: string, isScroll?: boolean) => {
    if (isScroll && href.includes('#')) {
      const sectionId = href.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Close mobile menu if open
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="hover:opacity-90 transition-opacity">
            <Logo size="sm" />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            link.isScroll ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, true);
                }}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isActiveLink(link.href)
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isActiveLink(link.href)
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            )
          ))}
          <Button
            onClick={() => handleNavClick('/#contact', true)}
            className="cursor-pointer"
          >
            Get Consultation
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                link.isScroll ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href, true);
                    }}
                    className={`text-sm font-medium p-2 rounded-md transition-colors ${
                      isActiveLink(link.href)
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`text-sm font-medium p-2 rounded-md transition-colors ${
                        isActiveLink(link.href)
                          ? "text-primary bg-primary/5"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                )
              ))}
              <Button 
                className="w-full cursor-pointer" 
                onClick={() => {
                  handleNavClick('/#contact', true);
                }}
              >
                Get Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}