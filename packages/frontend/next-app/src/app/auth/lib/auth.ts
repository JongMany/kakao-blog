import { CredentialsProvider } from "@/app/auth/lib/providers";
import NextAuth from "next-auth";
// https://github.com/zulmy-azhary/next-auth-boilerplate/blob/master/auth/index.ts
//https://dev.to/nagatodev/how-to-integrate-next-auth-with-your-nextjs-application-4mn9

// declare module "next-auth" {
//   interface User extends UserType {}
// }

// declare module "next-auth/adapters" {
//   interface AdapterUser extends UserType {}
// }

// declare module "next-auth/jwt" {
//   interface JWT extends UserType {}
// }

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [CredentialsProvider],
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("jwt", token, user);
      return token;
    },
    async session({ session, token }) {
      console.log("session", session, token);
      return session;
    },
    // async signIn({ user }) {},
  },
});
