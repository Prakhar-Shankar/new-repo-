// "use client"

import Link from "next/link"
import { getAuth, useAuth, auth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
// const {isSignedIn} = useAuth();
// console.log(isSignedIn)

const { userId } = auth();


  return (
    <>
    <nav className="bg-black py-4 px-6 flex items-center justify-between mb-5">
       <div className="flex items-center">
        <Link href='/'>
        <div className="text-lg uppercase font-bold text-gray-300">
            Calamity Clerk
            
        </div>
        </Link>
       </div>     
       <div className="text-white flex items-center">
        {!userId && (
          <>
        <Link href='sign-in' className="text-gray-300 hover:text-white mr-4">
            Sign In
        </Link>
        <Link href='sign-up' className="text-gray-300 hover:text-white mr-4">
            Sign Up
        </Link> 
          </>
        )}
        <div>
          <UserButton afterSignOutUrl="/"/>
        </div>
       </div>
    </nav>
    </>
  )
}

export default Header
