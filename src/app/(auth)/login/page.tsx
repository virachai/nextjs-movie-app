import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="bg-black/80 mt-24 md:mt-0 px-6 md:px-14 py-10 rounded md:max-w-sm">
      <form method="post" action="/api/auth/signin">
        <h1 className="font-semibold text-3xl text-white">Sign In</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="inline-block bg-[#333] w-full text-white placeholder:text-gray-400 placeholder:text-xs"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="inline-block bg-[#333] w-full text-white placeholder:text-gray-400 placeholder:text-xs"
          />
          <Button
            type="submit"
            variant="destructive"
            className="bg-[#e50914] w-full font-medium text-base"
          >
            Sign In
          </Button>
        </div>
      </form>

      <div className="text-right mt-2 text-gray-500 text-sm">
        <Link
          className="text-base text-white hover:underline"
          href="/forgot-password"
        >
          Forgot password?
        </Link>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        <span>Don’t have an account? </span>
        <Link className="text-base text-white hover:underline" href="/sign-up">
          Create one
        </Link>
      </div>
    </div>
  );
}
