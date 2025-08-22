import React from "react";
import { demoProducts } from "../libs/DemoProducts";
import Image from "next/image";
import Link from "next/link";

const ProductHighlights = async() => {

  const res=await fetch('https://nest-server-chi.vercel.app/products',{
    cache:'no-cache'
  })

  const products=await res.json()
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Product Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card bg-white shadow-lg  rounded-lg overflow-hidden">
              <figure>
                <Image width={120} height={120} src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-primary font-semibold mt-2">{product.price} TK</p>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/product/${product._id}`} className="btn btn-sm btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
