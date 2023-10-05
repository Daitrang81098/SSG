import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import {Suspense} from "react";
import UserPosts from "@/components/UserPost"
import getAllUsers from "@/lib/getAllUsers";
import {notFound} from "next/navigation";

type Params = {
    params: {
        userId: string
    }
}


export default async function UserId({params: {userId}}: Params) {

    const userData: Promise<User> = getUser(userId)
    const userPostData: Promise<Post[]> = getUserPosts(userId)
    const user = await userData
    if (!user) {
        notFound()
    }
    return (
        <main>
            <div>
                <h2><span>{user.name}</span> Posts </h2>
            </div>
            <br/>
            <Suspense fallback={<h2> Loading..</h2>}>
                <UserPosts promise={userPostData}/>
            </Suspense>

        </main>
    )
}

export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData
    return users?.map(user => ({
        userId: user.id.toString()
    }))
}
