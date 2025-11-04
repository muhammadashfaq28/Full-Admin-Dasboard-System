import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();    // ✅ ID from URL
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    sku: "",
    image: "",
  });

  // ✅ Load product by ID when component mounts
  useEffect(() => {
  console.log("ID from URL:", id);
   if (!id) return;

  fetch(`http://localhost:5000/api/products/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("API RESPONSE:", data);

      if (data.status && data.data) {
        setProduct(data.data);
      } else {
        console.log("Product not found or wrong response format");
      }
    })
    .catch((err) => console.log("ERROR:", err));
}, [id]);


  // ✅ Input handle
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/products/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((err) => console.log(err));
  };
  console.log("ID from URL:", id);


  return (
    
    <div style={{ padding: "20px" }}>
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          className="form-control"
        />

        <label>Description</label>
        <input
          name="description"
          value={product.description}
          onChange={handleChange}
          className="form-control"
        />

        <label>Price</label>
        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          className="form-control"
        />

        <label>Stock</label>
        <input
          name="stock"
          value={product.stock}
          onChange={handleChange}
          className="form-control"
        />

        <label>SKU</label>
        <input
          name="sku"
          value={product.sku}
          onChange={handleChange}
          className="form-control"
        />

        <label>Image</label>
        <input
          name="image"
          value={product.image}
          onChange={handleChange}
          className="form-control"
        />

        <br />
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
