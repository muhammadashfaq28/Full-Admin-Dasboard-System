import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/products/")   // ✅ API call
      .then((res) => res.json())
      .then((data) => setProducts(data.data))         // ✅ Data save
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>

      <table className="table table-bordered table-striped align-middle mt-3">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) &&
            products.map((p) => (
              <tr key={p._id || p.id}>
                <td>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td>{p.name}</td>
                <td>{p.sku}</td>
                <td>Rs {p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/edit/${p._id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => alert(`Delete product with ID: ${p._id}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsList;
