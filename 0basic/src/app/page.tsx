import type { Metadata } from "next"; // Imports Next.js Metadata type for page SEO/head tags
import Providers from "./Providers/providers"; // Imports our custom Client Component provider wrapper

export const metadata: Metadata = {
  // Exports metadata configuration object for Next.js
  title: "0 Basic - TanStack Query v5 in Next.js", // Sets the HTML title tag for the app
  description: "Beginner documentation for learning useQuery in Next.js", // Sets the HTML meta description tag
};

interface RootLayoutProps {
  // Defines TypeScript props interface for RootLayout
  children: React.ReactNode; // Specifies that layout accepts React children components
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Exports the main root layout component required by Next.js App Router
  return (
    // Returns the root HTML structure wrapper
    <html lang="en">
      {"  "}
      
      <body>
        {"  "}
        
        <Providers>
          {" // Wraps the application with TanStack Query provider "}
          
          {children // Renders the child components passed to the layout
          } 
        </Providers>{" "}
        
      </body>{" "}
    </html> 
  );
}
