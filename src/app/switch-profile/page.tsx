"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleSwitchProfile = () => {
    router.push("/browse");
  };

  return (
    <div>
      <h1>Switch Profile Page</h1>
      <button onClick={handleSwitchProfile}>Switch Profile</button>
    </div>
  );
}
