"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {
  const pathName = usePathname();

  console.log(pathName);

  const searchParams = useSearchParams();

  console.log(searchParams.get('search'));
  console.log(searchParams.get('randomvalue'));

  return (
    <div>
      <h1>This is our Cart Component</h1>
    </div>
  );
}
