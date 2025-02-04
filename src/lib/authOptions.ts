import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Session } from "next-auth"; // Adjust the import based on your project setup

// Extend the Session type to include accessToken
interface CustomSession extends Session {
  accessToken: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const baseApiUrl =
          process.env.NEXT_PUBLIC_BASE_API || "http://localhost:4000";

        const res = await fetch(`${baseApiUrl}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const data = await res.json();

        if (res.ok && data?.access_token) {
          return {
            id: data?.user_id || 0,
            accessToken: data.access_token,
            username: credentials?.username ?? "Unknown",
          };
        } else {
          // Throw custom error
          throw new Error("Authentication failed. Please try again.");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Store session as JWT
    maxAge: 60 * 60 * 24, // Optional: Set the session expiration (1 day) 60 * 60 * 24
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      const customSession = session as CustomSession;
      customSession.accessToken = token.accessToken as string;
      return customSession;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default authOptions;
