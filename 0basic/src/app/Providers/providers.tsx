"use client"; // Tells Next.js this file runs on the client browser (required for React Context/Hooks)

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Imports the core Query manager and Provider wrapper from TanStack Query
import { useState, ReactNode } from "react"; // Imports React hooks and TypeScript types for component children

interface ProvidersProps {
  // Defines TypeScript interface for props passed to Providers
  children: ReactNode; // Specifies that children can be any valid React element/node
}

export default function Providers({ children }: ProvidersProps) {
  // Export the main Providers wrapper component
  const [queryClient] = useState(
    // Uses useState so QueryClient is created ONLY ONCE during client lifecycle
    () =>
      // Pass a function initializer to run creation logic lazily
      new QueryClient({
        // Instantiates a new QueryClient instance
        defaultOptions: {
          // Defines global configuration options for all queries
          queries: {
            // Options specific to data fetching queries
            staleTime: 1000 * 60, // Keeps cached data fresh for 1 minute (60,000 ms) before marking it stale
          },
        },
      }),
  );

  return (
    // Returns the component JSX structure
    <QueryClientProvider client={queryClient}>
      {" // Wraps the application with TanStack Query provider "}
      
      {children // Renders the child components passed to the Providers wrapper
      } 
    </QueryClientProvider> // Closes the QueryClientProvider wrapper
  );
}
