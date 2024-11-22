import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs';
 
export const authConfig:NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account'
  },
  providers:[
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;
        
        const { email, password } = parsedCredentials.data;

        const user = await prisma.user.findUnique({where: {email: email.toLocaleLowerCase()}})
        console.log(user);
        if (!user) return null;

        if( !bcryptjs.compareSync(password, user.password) ) return null;

        console.log(user);

        const {password:_, ...rest} = user
        return user;
      },
    }),
  ]
} 

export  const { signIn,signOut } = NextAuth(authConfig);