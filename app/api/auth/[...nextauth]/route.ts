import prisma from "@/prisma/client";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

const handler = NextAuth({
    adapter:PrismaAdapter(prisma),
    providers : [
        CredentialsProvider({
            name :'Credentials',
            credentials:{
                email:{label:'Email',type:'email',placeholder:'Email'},
                password:{label:'Password',type:'paswword',placeholder:'Paswword'}
            },
            async authorize(credentials,req){
                if(!credentials?.email || !credentials.password)
                    return null;
                const user = await prisma.user.findUnique({
                    where:{email :credentials.email}
                });
                if (!user) return null;
                

            }
        }),
        GoogleProvider({
            clientId :process.env.GOOGLE_CLIENT_ID!,
            clientSecret :process.env.GOOGLE_CLIENT_SECRET!
        })
    ]  
})

export { handler as GET, handler as POST }