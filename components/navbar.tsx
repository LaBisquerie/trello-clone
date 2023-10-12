"use client"

import { UserButton } from '@clerk/nextjs'
import { Menu } from './menu'

export const Navbar = () => {
  return (
    <div className='fixed w-full z-50 flex justify-between items-centerpy-2 px-4 border-b bg-blue-600'>
      <div className='flex items-center'>
        <Menu />
      </div>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}