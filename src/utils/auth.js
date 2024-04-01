import { PrismaAdapter } from "@auth/prisma-adapter"
import { Prisma } from "@prisma/client"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = 
    {
    adapter: PrismaAdapter(Prisma),
        providers: [
            GithubProvider({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET,
            }),
            GoogleProvider({
                clientId: process.env.GOOGLE_ID,
                clientSecret: process.env.GOOGLE_SECRET,
            }),
        ],
    }
