import type { Metadata } from "next";
import Providers from "./providers/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "useQuery - TanStack Query v5 in Next.js",
  description: "Beginner documentation for learning useQuery in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}