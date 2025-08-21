'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const {data:session,status}=useSession()
  const handelLogout=()=>{
    signOut()
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start">
          {/* Website Name / Logo */}
          <a className="btn btn-ghost text-xl normal-case" href="/">EduTeach</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          {/* Navbar Items */}
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/dashboard/add-product">Add Product</Link></li>
            {
              !session?.user?.email&&<li><Link href="/login">Login</Link></li>
            }
          </ul>
        </div>

        <div className="navbar-end">
       {
        !session?.user?.email?   <Link href="/login" className="btn btn-primary rounded">Login</Link>:<button onClick={handelLogout} className="btn btn-error text-white">Logout</button>
       }
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="lg:hidden p-2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            Menu
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/dashboard/add-product">Add Product</Link></li>
              {
              !session?.user?.email&&<li><Link href="/login">Login</Link></li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
