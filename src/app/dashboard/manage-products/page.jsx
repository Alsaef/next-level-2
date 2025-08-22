"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    fetch("https://nest-server-chi.vercel.app/products", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    const res = await fetch(`https://nest-server-chi.vercel.app/products/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
         Swal.fire({
              title: `Deleted Successfully`,
              text: "You clicked the button!",
              icon: "success"
            });
      
      setProducts(products.filter((product) => product._id !== id));
    } else {
      alert(" Failed to delete");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
