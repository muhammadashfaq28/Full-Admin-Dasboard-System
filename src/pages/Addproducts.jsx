import React, { useState } from "react";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    stock:"",
    description:"",
    sku: "",
    price: "",
    image: "",
  });

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/products/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("API RES:", data);

    if (data.status) {
      alert("✅ Product Added Successfully!");
    } else {
      alert("❌ Failed to add product");
    }

  } catch (err) {
    console.log("ERROR →", err);
  }
};



  return (
    <div style={{ padding: "20px" }}>
  <h2 className="mb-4 text-center">Add Product</h2>

  <form
    onSubmit={handleSubmit}
    className="p-4 shadow"
    style={{ maxWidth: "500px", margin: "0 auto", borderRadius: "10px" }}
  >
    {/* Name */}
    <div className="mb-3">
      <label className="form-label fw-bold">Name</label>
      <input
        className="form-control"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
    </div>

    {/* Stock */}
    <div className="mb-3">
      <label className="form-label fw-bold">Stock</label>
      <input
        className="form-control"
        placeholder="Stock"
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
      />
    </div>

    {/* SKU */}
    <div className="mb-3">
      <label className="form-label fw-bold">SKU</label>
      <input
        className="form-control"
        placeholder="SKU"
        onChange={(e) => setForm({ ...form, sku: e.target.value })}
      />
    </div>

    {/* Price */}
    <div className="mb-3">
      <label className="form-label fw-bold">Price</label>
      <input
        className="form-control"
        placeholder="Price"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
    </div>

    {/* Image */}
    <div className="mb-3">
      <label className="form-label fw-bold">Image</label>
      <input
        type="file"
        className="form-control"
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
      />
    </div>

    <button type="submit" className="btn btn-primary w-100 mt-3 fw-bold">
      Add
    </button>
  </form>
</div>

  );
}

export default AddProduct;
