import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h1>Welcome to Nextjs Course 2024</h1>
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
      </main>
    </div>
  );
}
