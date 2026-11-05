'use client';
import { useQuery } from "@tanstack/react-query";

export const useProducts = (enabled: boolean = false) => {
    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products?limit=5');
        const data = await res.json();
        return data;
    }

    const {data, isLoading, error} = useQuery({queryKey:['products'], queryFn: fetchProducts,enabled});
    return {data, isLoading, error};
}