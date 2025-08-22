import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashboardLayout= async({ children })=> {
   const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content min-h-screen bg-gray-50 p-6">
        {/* Drawer toggle button for small screens */}
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden mb-4"
        >
          Open Dashboard Menu
        </label>

        {/* Page content */}
        <div className="lex items-center justify-center min-h-screen">
            {children}
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-white text-base-content h-full">
          <li>
            <Link href="/dashboard/add-product" className="hover:bg-gray-200 rounded-lg px-2 py-1">
              Add Product
            </Link>
          </li>
          <li>
            <Link href="/dashboard/manage-products" className="hover:bg-gray-200 rounded-lg px-2 py-1">
              Manage Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default DashboardLayout