import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://nest-server-chi.vercel.app/products/${id}`, {
    cache: "no-store", // no cache
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

const ProductDetailsPage = async ({ params }) => {
  const product = await getProduct(params.id);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Product Image */}
        <div className="relative w-full h-80 md:h-full">
          <Image
            src={product.image}
            alt={product.name}
            width={220}
            height={220}
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <p className="mt-6 text-2xl font-semibold text-blue-600">
            ${product.price}
          </p>

          <button className="mt-8 btn btn-primary w-full md:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
