"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {

    const res = await fetch('https://nest-server-chi.vercel.app/product', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const products = await res.json();
    console.log("Response:", products);

    Swal.fire({
      title: `Product added: ${data.name}`,
      text: "You clicked the button!",
      icon: "success"
    });
    
    reset();
  };

  return (
    <div className="flex  justify-center  bg-gray-50 p-6">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center">Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          className="input input-bordered w-full"
          {...register("name", { required: true })}
        />

        <input
          type="url"
          placeholder="Product Image"
          className="input input-bordered w-full"
          {...register("image", { required: true })}
        />
        <input
          type="number"
          placeholder="Price"
          className="input input-bordered w-full"
          {...register("price", { required: true })}
        />
        <textarea
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          {...register("description")}
        />
        <button type="submit" className="btn btn-primary w-full">
          Add Product
        </button>
      </form>
    </div>
  );
}
