
import React, { useState } from "react";
import "./index.css";

function App() {
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Headphones", price: 2000, quantity: 1 },
    { id: 3, name: "Mouse", price: 800, quantity: 1 }
  ]);

  const increaseQuantity = (id) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="shopping-container">
      <h1>🛒 Shopping Cart</h1>

      {cart.map((item) => (
        <section className="product-card" key={item.id}>
          <div>
            <h2>{item.name}</h2>
            <p>Price: ₹{item.price.toLocaleString("en-IN")}</p>
            <p>Quantity: {item.quantity}</p>
            <p>
              Subtotal: ₹
              {(item.price * item.quantity).toLocaleString("en-IN")}
            </p>
          </div>

          <div className="quantity-controls">
            <button
              type="button"
              aria-label={`Decrease ${item.name}`}
              onClick={() => decreaseQuantity(item.id)}
              disabled={item.quantity === 1}
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              type="button"
              aria-label={`Increase ${item.name}`}
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
          </div>
        </section>
      ))}

      <section className="total-card">
        <h2>
          Total: ₹{total.toLocaleString("en-IN")}
        </h2>
      </section>
    </main>
  );
}

export default App;
