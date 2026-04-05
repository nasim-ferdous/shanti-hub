"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
  MessageSquare,
} from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const publicRoutes = [
    { name: "Home", path: "/", icon: <MessageSquare size={18} /> },
    { name: "Explore", path: "/explore", icon: <MessageSquare size={18} /> },
    { name: "About", path: "/about", icon: <MessageSquare size={18} /> },
  ];

  const privateRoutes = [
    ...publicRoutes,
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    { name: "AI Chat", path: "/shanti-ai", icon: <MessageSquare size={18} /> },
  ];

  const routes = session ? privateRoutes : publicRoutes;

  return (
    <nav className="fixed w-full z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 1. Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary flex items-center gap-2"
          >
            <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg">
              S
            </span>
            <span className="hidden xs:block">ShantiHub</span>
          </Link>

          {/* 2. Desktop Menu & Actions */}
          <div className="hidden md:flex space-x-6 items-center">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {route.name}
              </Link>
            ))}

            <div className="h-6 w-[1px] bg-base-300 mx-2" />

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "night" ? "light" : "night")}
              className="p-2 rounded-xl bg-base-200 hover:bg-base-300 transition-all text-neutral"
            >
              {mounted &&
                (theme === "night" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            {/* Auth Menu - Desktop */}
            {session ? (
              <div className="relative group">
                <button className="flex items-center justify-center overflow-hidden transition-transform active:scale-95">
                  {session.user?.image ? (
                    <img
                      src={session.user.image}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full border border-primary object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary text-primary font-bold">
                      {session.user?.name?.[0]}
                    </div>
                  )}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-base-100 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 border border-base-300 p-2">
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-2 p-2 hover:bg-base-200 rounded-lg text-sm"
                  >
                    <User size={16} /> Profile
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center gap-2 w-full text-left p-2 text-error hover:bg-error/10 rounded-lg text-sm"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="btn btn-primary btn-sm rounded-full px-6"
              >
                Login
              </Link>
            )}
          </div>

          {/* 3. Mobile Right Side (Toggle + Hamburger) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "night" ? "light" : "night")}
              className="p-2 rounded-lg bg-base-200 text-neutral"
            >
              {mounted &&
                (theme === "night" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-primary text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute w-full bg-base-100 border-b border-base-300 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-base-100 shadow-inner">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all font-medium"
            >
              {route.icon && <span>{route.icon}</span>}
              {route.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-base-300">
            {session ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3">
                  {/* Avatar in Mobile Drawer */}
                  {session.user?.image ? (
                    <img
                      src={session.user.image}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full border border-primary object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                      {session.user?.name?.[0]}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-sm">{session.user?.name}</p>
                    <p className="text-xs opacity-60">{session.user?.email}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/dashboard/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn btn-sm btn-ghost border-base-300 rounded-xl"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="btn btn-sm btn-error btn-outline rounded-xl"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary w-full rounded-xl"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
