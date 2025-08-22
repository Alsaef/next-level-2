// app/products/page.js
import Image from "next/image";
import Link from "next/link";

export default async function ProductsPage() {

  const res = await fetch('https://nest-server-chi.vercel.app/products', {
    cache: 'no-cache'
  })

  const products = await res.json()

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold my-6 text-center ">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600">${product.price} TK</p>
            <Link href={`/product/${product._id}`} className="btn btn-sm btn-primary">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
