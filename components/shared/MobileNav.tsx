import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'


const MobileNav = () => {
  return (
    <nav className='md-hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
            <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={24}
                height={24}
                className='cursor-pointer'
            />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
            <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
      </Sheet>

    </nav>
  )
}

export default MobileNav
