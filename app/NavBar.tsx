'use client'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const{status,data:session} = useSession();
  if (status === 'loading') return null;
  return (
    <div className='flex bg-slate-200 p-5 space-x-3 '>
        <Link href='/' className='mr-5'>Next.Js</Link>
        <Link href='/users'>Users</Link>
        {status === 'authenticated' && <div>{session.user!.name}</div>}
        {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
    </div>
  )
}

export default Navbar