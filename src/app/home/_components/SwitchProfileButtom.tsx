// src/app/home/_components/SwitchProfileButtom.tsx
import { User } from "lucide-react"; // Import the User icon
import Link from "next/link"; // Import Link from next/link

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function SwitchProfileButtom() {
  return (
    <Link href="/select-profile">
      <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
        <User size={16} /> <span>Switch Profile</span>
      </DropdownMenuItem>
    </Link>
  );
}
