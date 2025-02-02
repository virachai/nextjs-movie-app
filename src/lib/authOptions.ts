// src/lib/authOptions.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Use the BASE_API environment variable
        const baseApiUrl = process.env.BASE_API;

        // Make the POST request to your backend API
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

        const user = await res.json();

        // If login was successful, return user data
        if (res.ok && user) {
          return user;
        } else {
          // If authentication fails, return null
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Store session as JWT
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
};

export default authOptions;
