import type { Metadata } from "next";
import Providers from "./Providers/providers";

export const metadata: Metadata = {
  title: "My TanStack Next.js App",
  description: "Learning TanStack Query v5 with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {
            children //wraps the application with TanStack Query provider and renders the child components passed to the layout
          }
        </Providers>
      </body>
    </html>
  );
}
