"use client"; // Make sure the file is marked as a client-side component

import React, { useEffect, useState } from "react";
import Product from "../components/product";

const ProductsPage = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    async function fetchGadgets() {
      try {
        const response = await fetch("../api/gadgets"); // or use your backend URL here
        console.log(response); // Log the response to check if it's correct
        if (response.ok) {
          const data = await response.json();
          setGadgets(data);
        } else {
          console.error("Failed to fetch gadgets:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching gadgets:", error);
      }
    }

    fetchGadgets();
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <div>
        {gadgets.map((gadget) => (
          <Product key={gadget._id} product={gadget} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
