import Header from '@/components/header'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const HomePageLayout = ({children} : {children:React.ReactNode}) => {
  return <ClerkProvider>
    <main>
        <Header />
        {children}
    </main>
    </ClerkProvider>
}

export default HomePageLayout