"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Transport", path: "/transport" },
  { name: "Transit", path: "/transit" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed z-[100] w-full transition-all duration-700 ease-in-out ${
        scrolled
          ? "border-b border-slate-100 bg-white/90 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl"
          : "bg-gradient-to-b from-slate-950/40 to-transparent py-4 sm:py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex shrink-0 items-center"
          >
            <Link href="/" className="group flex items-center">
              <span className="rounded-xl bg-white/95 px-3 py-2 shadow-lg shadow-slate-900/5 backdrop-blur">
                <Image
                  src="/images/logo.png"
                  alt="Logo GLS-INTER SARL"
                  width={1069}
                  height={226}
                  priority
                  className="h-9 w-auto object-contain sm:h-11"
                />
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ml-10 flex items-center space-x-1"
            >
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`group relative px-4 py-2 text-sm font-bold transition-all ${
                    pathname === link.path
                      ? scrolled
                        ? "text-brand-accent"
                        : isHome
                          ? "text-white"
                          : "text-brand-accent"
                      : scrolled
                        ? "text-slate-600 hover:text-slate-900"
                        : isHome
                          ? "text-white/80 hover:text-white"
                          : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative z-10"
                  >
                    {link.name}
                  </motion.span>
                  {pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    />
                  )}
                  <div className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-brand-accent/0 transition-all duration-300 group-hover:bg-brand-accent/30" />
                </Link>
              ))}
              <div className="pl-6">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden rounded-full border border-slate-800 bg-slate-950 px-8 py-4 text-xs font-black tracking-widest text-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] ring-4 ring-slate-950/5 transition-all hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    DEVIS GRATUIT
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-blue-600 transition-transform duration-500 group-hover:translate-x-0" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((value) => !value)}
              className={`rounded-xl p-2 transition-colors ${
                scrolled
                  ? "bg-slate-100 text-slate-700"
                  : isHome
                    ? "bg-white/10 text-white"
                    : "bg-slate-100 text-slate-700"
              }`}
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className="overflow-hidden border-t border-slate-100 bg-white/95 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-2 px-4 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className={`block rounded-2xl px-4 py-4 text-2xl font-black tracking-tight transition-all ${
                      pathname === link.path
                        ? "bg-brand-accent/10 text-brand-accent shadow-inner"
                        : "text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  className="block w-full rounded-2xl border border-slate-800 bg-slate-950 px-8 py-5 text-center text-xl font-black tracking-tight text-white shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
                >
                  OBTENIR UN DEVIS
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
