// app/products/page.js
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 250,
    image: "/images/phone.jpg",
  },
  {
    id: 2,
    name: "Headphones",
    price: 50,
    image: "/images/headphones.jpg",
  },
  {
    id: 3,
    name: "Laptop",
    price: 800,
    image: "/images/laptop.jpg",
  },
];

export default function ProductsPage() {
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
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
