import React from "react";
import { Home, PlayCircle, Search, Download, Menu } from "lucide-react";
import Link from "next/link";

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: PlayCircle, label: "New & Hot", href: "/latest" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Download, label: "Downloads", href: "" },
    { icon: Menu, label: "More", href: "" },
  ];

  return (
    <div className="right-0 bottom-0 left-0 z-50 fixed border-gray-800 sm:hidden bg-black border-t">
      <nav className="mx-auto max-w-screen-xl">
        <ul className="flex justify-between items-center px-4 py-2">
          {navItems.map((item) => (
            <li key={item.label} className="flex flex-col items-center">
              {item.href ? (
                <Link
                  href={item.href}
                  passHref
                  className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon size={24} />
                  <span className="text-xs">{item.label}</span>
                </Link>
              ) : (
                <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors">
                  <item.icon size={24} />
                  <span className="text-xs">{item.label}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
