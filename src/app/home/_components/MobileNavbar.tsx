"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { links } from "./Navlinks.constant";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="right-0 bottom-0 left-0 z-50 md:hidden">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <div className="hover:bg-slate-700 p-1 rounded-sm text-gray-300 transition cursor-pointer">
            <Menu />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          {links.map((link) => (
            <DropdownMenuItem key={link.id} className="cursor-pointer">
              <Link
                href={link.href}
                className="w-full"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
