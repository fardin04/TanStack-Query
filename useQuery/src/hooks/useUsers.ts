'use client';

import { useQuery } from "@tanstack/react-query";

export const useUsers = (enabled: boolean) => {
    const fetchUsers = async () => {
        const res = await fetch('https://dummyjson.com/users?limit=5');
        const data = await res.json();
        return data;
    }

    const {data, isLoading, error} = useQuery({queryKey:['users'], queryFn: fetchUsers, enabled});
    return {data, isLoading, error};
}