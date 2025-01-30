// components/shopping-view/layout.js
import { Outlet, useLocation } from "react-router-dom"; // Import useLocation
import ShoppingHeader from "./header";
import ShoppingFooter from "./footer"; // Import the footer

function ShoppingLayout() {
  const location = useLocation(); // Get the current route location

  // Conditionally render the footer only on the homepage
  const showFooter = location.pathname === "/shop/home";

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Common header */}
      <ShoppingHeader />

      {/* Page content */}
      <main className="flex flex-col w-full">
        <Outlet /> {/* Render the content for the current route */}
      </main>

      {/* Render footer only on the home page */}
      {showFooter && <ShoppingFooter />}
    </div>
  );
}

export default ShoppingLayout;
