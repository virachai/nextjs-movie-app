// src/app/home/_components/UserButton.tsx
import { getServerSession } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authOptions } from "@/lib/authOptions";
import UserSignOutButton from "./UserSignOutButton";
import SwitchProfileButtom from "./SwitchProfileButtom";

export default async function UserButton() {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   return;
  // }

  const avatarSrc = session?.user?.image || "/avatar.png";
  const userShortName = session?.user?.name?.slice(0, 2) || "un";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative rounded-sm size-10">
          <Avatar className="rounded-sm size-10">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback className="rounded-sm uppercase">
              {userShortName}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-2">
            <p className="font-medium text-sm leading-none">
              {session?.user?.name || userShortName}
            </p>
            <p className="text-muted-foreground text-xs leading-none">
              {session?.user?.email || "mail@exam.com"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <SwitchProfileButtom />
        <UserSignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
