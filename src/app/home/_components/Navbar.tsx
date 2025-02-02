import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/../public/netflix_logo.svg";

import MobileNavbar from "./MobileNavbar";
import NavLink from "./NavLink";
import { links } from "./Navlinks.constant";
import UserButton from "./UserButton";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center mx-auto sm:px-6 lg:px-8 p-5 w-full max-w-7xl">
      <nav className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="md:flex gap-x-4 hidden ml-14">
          {links.map((link) => (
            <NavLink key={link.id} path={link.href} label={link.name} />
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-x-8">
        <MobileNavbar />
        <Search className="text-gray-300 cursor-pointer size-5" />
        <Bell className="text-gray-300 cursor-pointer size-5" />
        <UserButton />
      </div>
    </header>
  );
}
