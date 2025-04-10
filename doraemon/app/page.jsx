// app/page.jsx
import React from "react";
import Link from "next/link"; // Import Link for navigation between pages

const HomePage = () => {
  return (
    <div className="bg-blue-300 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Doraemon Gadget Shop!</h1>
      <p className="text-lg">
        Explore the amazing gadgets Doraemon has to offer.
      </p>

      {/* Navigation to Products page */}
      <div>
        <Link href="/products">
          <button>See All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
