// app/page.jsx
import React from "react";
import Link from "next/link"; // Import Link for navigation between pages

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Doraemon Gadget Shop!</h1>
      <p>Explore the amazing gadgets Doraemon has to offer.</p>

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
