# useQuery: Introduction to TanStack Query v5 (Next.js App Router)

Welcome to the first module of the TanStack Query (React Query) documentation repo! 

This folder covers the **absolute basics** of client-side data fetching using TanStack Query v5 in a Next.js App Router project using TypeScript.

---

## 💡 Core Concepts         

### 1. Server State vs Client State
* **Client State:** UI states like modal toggles, theme settings, or form inputs (managed with `useState` or Redux).
* **Server State:** Data stored on a remote server that requires async API calls to fetch, update, and cache (managed with TanStack Query).

### 2. Provider Setup in Next.js App Router (`app/providers.tsx`)
In Next.js App Router, components are **Server Components** by default. Because TanStack Query relies on React Context, we must:
1. Use the `'use client'` directive.
2. Wrap `new QueryClient()` inside `useState` so it is created **only once** on the client side without leaking state across server requests.

### 3. The `useQuery` Hook (`app/page.tsx`)
`useQuery` is the primary hook for reading/fetching data. It requires two main options:
* **`queryKey`**: An array that uniquely identifies and caches the query result (e.g., `['products']`).
* **`queryFn`**: An asynchronous function that fetches the data and returns a Promise.

---

## 🛠️ Code Architecture

```
└── 📁 0basic
    ├── 📁 public
    ├── 📁 src
    │   └── 📁 app
    │       ├── 📁 Providers
    │       │   └── 📄 providers.tsx
    │       ├── 🎨 globals.css
    │       ├── 📄 layout.tsx
    │       └── 📄 page.tsx
    ├── ⚙️ .gitignore
    ├── 📝 README.md
    ├── 📄 eslint.config.mjs
    ├── 📄 next-env.d.ts
    ├── 📄 next.config.ts
    ├── ⚙️ package-lock.json
    ├── ⚙️ package.json
    └── ⚙️ tsconfig.json
```