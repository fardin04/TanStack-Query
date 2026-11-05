'use client';
import {useProducts} from '@/hooks/useProducts';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default function Product({enabled}: {enabled: boolean}) {
  const { data, isLoading, error } = useProducts(enabled);

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
            <h1>Products Details</h1>
            <ul>
                {data?.products?.map((product: Product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}