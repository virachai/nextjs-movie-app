import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import BackgroundImage from "@/../public/login_background.jpg";
import Logo from "@/../public/netflix_logo.svg";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  // console.log(session);
  if (session) {
    return redirect("/home");
  }

  return (
    <div className="relative flex flex-col sm:justify-center sm:items-center bg-black sm:bg-transparent w-screen min-w-[350px] h-screen">
      <Image
        src={BackgroundImage}
        alt="Background image for authentication layout"
        className="flex sm:object-cover brightness-50 z-0"
        priority
        fill
      />

      <Link href="/">
        <Image
          src={Logo}
          alt="Netflix Logo"
          width={120}
          height={120}
          priority
          className="top-4 md:top-6 left-4 md:left-10 absolute object-contain"
        />
      </Link>

      {children}
    </div>
  );
}
