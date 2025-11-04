import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        background: "#eee",
        height: "100vh",
        padding: "20px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li>
          <Link to="/add-product">Add Product</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
