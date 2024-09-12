"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// useRouter -> next/navigation

export default function Home() {
  const router = useRouter();

  console.log(router);

  const handleNavigate = () => {
    router.push("/products");
  };

  const handleDynamicNavigate = () => {
    router.push("/products/123");
  };

  const handleNestedDynamicNavigate = () => {
    router.push("/products/123/1212/54212");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h1 className="font-bold mt-3 text-lg">
          Welcome to Nextjs Course 2024
        </h1>
        <Link href={"/products"}>Navigate to products page</Link>
        <Link href={"/accounts"}>Navigate to accounts page</Link>
        <Link href={"/products/[details]"} as="/products/123">
          Dynamic Route
        </Link>
        <Link
          href={"/products/[..product-review]"}
          as="/products/123/51212/563213"
        >
          Nested Dynamic Route
        </Link>

        <h2 className="font-bold mt-3 text-lg">
          Perform Alternative way of Navigation using useRouter
        </h2>

        <button onClick={handleNavigate}>
          Navigate to products page using useRouter
        </button>
        <button onClick={handleDynamicNavigate}>
          Navigate to Dynamic Route page using useRouter
        </button>
        <button onClick={handleNestedDynamicNavigate}>
          Navigate to Nested Dynamic Route page using useRouter
        </button>
      </main>
    </div>
  );
}
