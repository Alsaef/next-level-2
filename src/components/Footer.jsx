'use client'
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-base-200 text-base-content py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">EduTeach</h2>
          <p>
            EduTeach is your go-to platform to explore and manage products. Stay updated with latest products and add your favorites.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link href="/dashboard/add-product" className="hover:underline">Add Product</Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline">Login</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-base-300 pt-4 text-sm">
        &copy; {new Date().getFullYear()} EduTeach. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
