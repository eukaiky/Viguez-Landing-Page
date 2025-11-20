"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-transparent z-50 flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-2 md:py-3 backdrop-blur-none md:backdrop-blur-sm md:border-b border-black/10">
        <div className="flex items-center gap-3 min-[556px]:gap-0">
          <button
            type="button"
            className="min-[556px]:hidden p-2 z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>

          <Link
            href="#home"
            className={`cursor-pointer ${isMenuOpen ? "hidden" : ""}`}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <Image
              src={isLogoHovered ? "/logo-hover.svg" : "/logo.svg"}
              alt="Viguez logo"
              width={64}
              height={64}
              className="w-10 h-10 md:w-13 md:h-13 lg:w-14 lg:h-14"
            />
          </Link>
        </div>

        <nav className="hidden min-[556px]:block" aria-label="Main navigation">
          <ul className="flex gap-8 text-base lg:text-lg">
            <li>
              <Link
                href="#about"
                className="hover:opacity-70 transition-opacity"
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:opacity-70 transition-opacity"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:opacity-70 transition-opacity"
              >
                Projetos{" "}
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:opacity-70 transition-opacity">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <Button className="max-[555px]:hidden font-sans font-medium px-6 py-5 text-base">
          Contrate-nos
        </Button>
      </header>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-full h-[50vh] bg-gray-100 shadow-lg z-45 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="h-full flex flex-col items-center justify-center px-6">
          <ul className="flex flex-col items-center gap-8 text-xl text-center">
            <li>
              <Link
                href="#about"
                className="block hover:opacity-70 transition-opacity"
                onClick={toggleMenu}
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block hover:opacity-70 transition-opacity"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block hover:opacity-70 transition-opacity"
                onClick={toggleMenu}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="block hover:opacity-70 transition-opacity"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
            </li>
          </ul>

          <div className="mt-12 w-full max-w-xs">
            <Button className="w-full text-base" size="lg" onClick={toggleMenu}>
              Contrate-nos
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
