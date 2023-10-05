import type { Metadata } from 'next'
import React from "react"
import getUser from "@/lib/getUser";
type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({params : {userId}} : Params):Promise<Metadata> {
    const userData: Promise<User> = await getUser(userId);
    const user: User = await userData
    console.log(user, "ffff")
    if (!user){
        return {
            title: "User not found",
            description:"user not found"
        }
    }
    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}
type LayoutProps = {
    children: React.ReactNode
}
export default function Layout({children }: LayoutProps) {
    return (
        <section>

            {children}

        </section>
    )
}
