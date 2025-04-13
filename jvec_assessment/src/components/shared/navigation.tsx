"use client";

import type React from "react";

import { useState } from "react";
import { Link, useLocation, useResolvedPath } from "react-router";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/data/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { logo, phone } from "@/assets";

function NavLink({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const location = useLocation();
  const resolved = useResolvedPath(to);

  // Check if this route is active
  const isActive = () => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(resolved.pathname);
  };

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${className} ${isActive() ? "font-bold" : "font-normal"}`}
    >
      {children}
    </Link>
  );
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-dark-blue">
      <div className="container mx-auto md:px-10 px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white font-bold text-xl flex items-center"
              onClick={closeMenu}
            >
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`text-white hover:text-white/90 transition-colors flex items-center ${
                        location.pathname.startsWith(item.path)
                          ? "font-bold"
                          : "font-normal"
                      }`}
                    >
                      {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    {item.subItems?.map((subItem) => (
                      <DropdownMenuItem key={subItem.path}>
                        <NavLink to={subItem.path} className="w-full">
                          {subItem.name}
                        </NavLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-white/90  transition-colors"
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex">
            <Button
              variant="outline"
              className="rounded-full bg-gradient-blue p-5 border-primary text-white hover:bg-blue-600/30"
            >
              <img src={phone} alt="phone icon" /> +234 818 444 1404
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden z-50 mt-4 bg-transparent rounded-lg p-4">
            <nav className="flex flex-col items-start space-y-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`text-white hover:text-white/90 transition-colors text-left flex items-center ${
                          location.pathname.startsWith(item.path)
                            ? "font-bold"
                            : "font-normal"
                        }`}
                      >
                        {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white">
                      {item.subItems?.map((subItem) => (
                        <DropdownMenuItem key={subItem.path}>
                          <NavLink
                            to={subItem.path}
                            className="w-full"
                            onClick={closeMenu}
                          >
                            {subItem.name}
                          </NavLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="text-white hover:text-white/90 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </NavLink>
                )
              )}
              <Button
                variant="outline"
                className="rounded-full bg-gradient-blue p-5 border-primary text-white hover:bg-blue-600/30"
              >
                <img src={phone} alt="phone icon" /> +234 818 444 1404
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
