import React from "react";

function Orders() {
  return (
    <>
    <div className="container py-4">
      <h2 className="mb-4 fw-bold">Orders</h2>

      {/* Filters */}
      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-primary">All Products</button>
        <button className="btn btn-warning">Cart</button>
        <button className="btn btn-success">Delivered</button>
      </div>

      {/* Orders List */}
      <div className="card p-3 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-1">Order #1001</h5>
            <p className="mb-1 text-muted">Product: iPhone 15 Pro Max</p>
            <p className="mb-0 text-muted">Quantity: 1</p>
          </div>
          <span className="badge bg-success">Delivered</span>
        </div>
      </div>

      <div className="card p-3 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-1">Order #1002</h5>
            <p className="mb-1 text-muted">Product: Samsung Galaxy S24</p>
            <p className="mb-0 text-muted">Quantity: 2</p>
          </div>
          <span className="badge bg-warning text-dark">Pending</span>
        </div>
      </div>

      <div className="card p-3 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-1">Order #1003</h5>
            <p className="mb-1 text-muted">Product: Sony Headphones</p>
            <p className="mb-0 text-muted">Quantity: 3</p>
          </div>
          <span className="badge bg-primary">In Cart</span>
        </div>
      </div>

    </div>
    </>
  );
}

export default Orders;