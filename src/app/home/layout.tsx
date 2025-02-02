// import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth";

// import { authOptions } from "@/lib/authOptions";

import Navbar from "./_components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: Props) {
  // const session = await getServerSession(authOptions);

  // if (!session) redirect("/login");

  return (
    <>
      <Navbar />
      <main className="mx-auto sm:px-6 lg:px-8 w-11/12 sm:w-full max-w-7xl">
        {children}
      </main>
    </>
  );
}
