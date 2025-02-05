"use client"; // Add this directive to make the page a client component

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function SignInPage() {
  const [username, setUsername] = useState("netflix");
  const [password, setPassword] = useState("JSD#8@genKX");
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const router = useRouter();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous error messages
    setUsernameError("");
    setPasswordError("");
    setError("");

    // Validate inputs
    if (!username) {
      // setUsernameError("Username is required.");
      setError("Username is required.");
      return;
    }
    if (!password) {
      // setPasswordError("Password is required.");
      setError("Password is required.");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      // If login is successful and token is returned
      if (result?.ok) {
        // router.push("/select-profile"); // Redirect to home page after successful login
        return redirect("/select-profile");
      } else {
        setError("Authentication failed. Please try again.");
      }
    }
  };

  return (
    <div className="z-10 bg-black/80 mt-24 md:mt-0 px-6 md:px-14 py-10 rounded md:max-w-sm">
      <form onSubmit={handleSubmit}>
        <h1 className="font-semibold text-3xl text-white">Sign In</h1>
        <div className="space-y-4 mt-5">
          <label htmlFor="username" className="text-white">
            Username
          </label>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            className="inline-block bg-[#333] w-full text-white placeholder:text-gray-400 placeholder:text-xs"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && (
            <p className="text-red-500 text-sm">{usernameError}</p>
          )}

          <div></div>
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="inline-block bg-[#333] w-full text-white placeholder:text-gray-400 placeholder:text-xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          <Button
            type="submit"
            variant="destructive"
            className="bg-[#e50914] w-full font-medium text-base"
          >
            Sign In
          </Button>
        </div>
      </form>

      <div className="text-right mt-4 text-gray-500 text-sm">
        <Link
          className="text-base text-white hover:underline"
          href="/forgot-password"
        >
          Forgot password?
        </Link>
      </div>

      <div className="flex pt-4">
        &nbsp;
        {error && <p className="text-red-500">{error}</p>}
        &nbsp;
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <span>Don’t have an account? </span>
        <Link className="text-base text-white hover:underline" href="/home">
          Create one
        </Link>
      </div>
    </div>
  );
}
