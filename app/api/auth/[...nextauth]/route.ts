import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      //@ts-ignore
      return profile?.login === process.env.GITHUB_USERNAME
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error', // Create this page to handle errors
  },
})

export { handler as GET, handler as POST }
