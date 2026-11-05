"use client";
import { useState } from "react";
import Button from "./Button";
import Product from "./Product";
import User from "./User";

export default function Home() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Welcome to My TanStack Next.js App</h1>
      <p className="text-center">
        This is a simple application demonstrating the use of TanStack Query v5:
        useQuery with Next.js.
      </p>
      <p className="flex justify-center">
        For product details click the below button
      </p>
      <div className="mt-4">
        <Button
          onClick={() => {
            setEnabled(true);
          }}
        >
          Product Details
        </Button>
      </div>
      <div className="mt-4">
        <Product enabled={enabled} />
      </div>
      <p className="flex justify-center">
        For User details click the below button
        </p>
        <div className="mt-4"> <Button onClick={() => {
            setEnabled(true);
          }}>User Details</Button></div>
        <div className="mt-4">
          <User enabled={enabled} />
        </div>
    </div>
  );
}
