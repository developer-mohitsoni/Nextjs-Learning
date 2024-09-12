export default function Products({ searchParams }) {
  console.log(searchParams);

  // You can also get it's value directly

  console.log(searchParams.search);

  return <h1>Products</h1>;
}
