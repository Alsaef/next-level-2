"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen items-center justify-center bg-red-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">500</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          Server Error
        </h2>
        <p className="mt-2 text-gray-600">
          Something went wrong while fetching data.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 inline-block rounded-xl bg-red-500 px-6 py-3 text-white font-medium shadow-md hover:bg-red-600 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
