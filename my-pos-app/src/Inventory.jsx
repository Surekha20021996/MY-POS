import React, { useState, useEffect } from "react";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    code: "",
    name: "",
    price: "",
    quantity: "",
  });

  // Sample product data
  useEffect(() => {
    const initialProducts = [
      { id: 1, code: "p001", name: "Rice 10kg", price: 10, quantity: 1 },
      { id: 2, code: "p002", name: "Sugar 2kg", price: 20, quantity: 2 },
      { id: 3, code: "p003", name: "Coconut Oil 2L", price: 55.5, quantity: 2 },
    ];
    setProducts(initialProducts);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...newProduct, id: products.length + 1 };
    setProducts((prev) => [...prev, newItem]);
    setNewProduct({ code: "", name: "", price: "", quantity: "" });
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedProduct = {
      name: prompt("Enter product name"),
      price: prompt("Enter price"),
      quantity: prompt("Enter quantity"),
    };
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const calculateTotalQty = () => {
    return products.reduce((total, product) => total + product.quantity, 0);
  };

  const calculateTax = () => {
    return calculateTotal() * 0.07;
  };

  const calculateNetTotal = () => {
    return calculateTotal() + calculateTax();
  };

  return (
    <div className="container">
      <h1>Inventory Management</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          name="code"
          value={newProduct.code}
          onChange={handleChange}
          className="input-field"
          placeholder="Product Code"
        />
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          className="input-field"
          placeholder="Price"
        />
        <input
          type="number"
          name="quantity"
          value={newProduct.quantity}
          onChange={handleChange}
          className="input-field"
          placeholder="Quantity"
        />
        <button type="submit">Add Product</button>
      </form>

      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{(product.price * product.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => handleUpdate(product.id)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <p><strong>Total Qty: </strong>{calculateTotalQty()}</p>
        <p><strong>Summary Total: </strong>${calculateTotal().toFixed(2)}</p>
        <p><strong>Summary Tax (7%): </strong>${calculateTax().toFixed(2)}</p>
        <p><strong>Summary Net Total: </strong>${calculateNetTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Inventory;
