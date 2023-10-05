import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link"
export default async function Page() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;
    const content = (
        <section>
            <h2>
                Unique Users
            </h2>
            <br/>
            {users.map(user => (
                <>
                    <ul >
                        <Link key = {user.id} href={`/users/${user.id}`}>
                            <li> {user.name} </li>
                        </Link>
                    </ul>
                </>
            ))}
        </section>
    )
    return (
        <>
            {content}
        </>
    );
};
