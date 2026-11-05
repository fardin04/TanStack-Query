'use client';
import {useUsers} from "../hooks/useUsers";

interface User {
  id: number;
  firstName: string;
  email: string;
}

export default function User({ enabled }: { enabled: boolean }) {
    const { data, isLoading, error } = useUsers(enabled);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!enabled) {
        return null; // Return null if the query is not enabled, preventing the component from rendering any content
    }

    return (
        <div>
            <h1>User Details</h1>
            <ul>
                {data?.users?.map((user: User) => (
                    <li key={user.id}>
                        <h2>{user.firstName}</h2>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}