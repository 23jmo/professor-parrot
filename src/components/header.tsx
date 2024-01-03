"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../../public/parrot.png'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from './ui/button'
import { UserButton, auth} from "@clerk/nextjs"

const Header = async() => {
    const [path, setPath] = useState('/')

    const {userId} = await auth();
    const isAuth = !!userId;

  return <header className='sticky p-2 flex justify-center items-center font-semibold border-b-2 border-slate-200/30'>
    <Link href={'/'} className="w-full flex gap-2 justify-left items-center">
        <Image src={Logo} alt='Parrot Logo' width={25} height={25}/>
        <span className='hidden md:block'>Professor Parrot</span>
    </Link>
    <NavigationMenu className='bg-white'>
        <NavigationMenuList className='gap-6'>
            <NavigationMenuItem>
                <NavigationMenuTrigger onMouseOver={() => setPath('#about')} className={cn({
                    'dark:text-white': path === '#about',
                    'dark:text-white/40': path !== '#about',
                    'text-black' : path === '#about',
                    'underline' : path === '#about',
                })}>About</NavigationMenuTrigger>

                <NavigationMenuContent className='bg-white/80'>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem
                                href="#"
                                title="Mission"
                                >
                                Learn more about our mission and vision
                            </ListItem>
                            <ListItem
                                href="#"
                                title="Meet the Team"
                                >
                                Meet the creators of Professor Parrot
                            </ListItem>
                        </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger onMouseOver={() => setPath('#learn')} className={cn({
                    'dark:text-white': path === '#learn',
                    'dark:text-white/40': path !== '#learn',
                    'text-black' : path === '#learn',
                    'underline' : path === '#learn',
                })}>Learn More</NavigationMenuTrigger>
                
                <NavigationMenuContent className='bg-white/80'>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem
                                href="#"
                                title="Become a Partner"
                                >
                                Bring Professor Parrot to your school or organization
                            </ListItem>
                            <ListItem
                                href="#"
                                title="Future Plans"
                                >
                                Meet the creators of Professor Parrot
                            </ListItem>
                        </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            {!isAuth ? (
                <>
                <Button variant='btn-primary' className='text-white rounded-xl hover:bg-green-600' asChild>
                <Link href="/sign-in">Login</Link>
                </Button>
                <Button variant='btn-primary' className="text-gray-700 bg-gray-100 rounded hover:bg-gray-200" asChild>
                <Link href="/sign-up">Sign Up</Link>
                </Button>
                </>
            ): (
                <>
                <Button variant='btn-primary' className="text-gray-700 bg-gray-100 rounded hover:bg-gray-200" asChild>
                <Link href="/profile">Profile</Link>
                </Button>
                <li>
                    <UserButton afterSignOutUrl="/"/>
                </li>
                </>
            )}
        </NavigationMenuList>
    </NavigationMenu>
  </header>
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({className, title, children, ...props}, ref) => {
    return <li>
        <NavigationMenuLink asChild>
            <a ref={ref} className={cn('group block select-none space-y-1 font-medium leading-none')}
            {...props}>
                <div className='text-black text-sm font-medium leading-none'>
                    {title}
                </div>
                <p className="group-hover:text-black/70 line-clamp-2 text-sm leading-snug text-black/40">
                    {children}
                </p>
            </a>
        </NavigationMenuLink>
    </li>
})
ListItem.displayName='ListItem';

export default Header