import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 25000 },
  { id: 3, name: "Headphone", price: 5000 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState({});

  // 🛒 পণ্য যোগ করার ফাংশন
  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
    setDisabledButtons({ ...disabledButtons, [product.id]: true }); // ✅ বাটন ডিজেবল করো
  };

  // ❌ পণ্য রিমুভ করার ফাংশন
  const removeFromCart = (index, product) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    setTotal(total - product.price);
    setDisabledButtons({ ...disabledButtons, [product.id]: false }); // ✅ বাটন আবার enable করো
  };

  return (
    <div className="flex gap-6 p-10">
      {/* 🏬 পণ্যের তালিকা */}
      <div className="w-1/2 p-5 border">
        <h2 className="text-xl font-bold mb-4">🛍️ পণ্য তালিকা</h2>
        {products.map((product) => (
          <div key={product.id} className="flex justify-between p-2 border-b">
            <span>{product.name} - {product.price}৳</span>
            <button
              className={`px-3 py-1 rounded ${
                disabledButtons[product.id] 
                  ? "bg-gray-400 cursor-not-allowed" // Disabled হলে ধূসর
                  : "bg-blue-500 text-white" // Enabled হলে নীল
              }`}
              onClick={() => addToCart(product)}
              disabled={disabledButtons[product.id]} // ✅ বাটন ডিজেবল হবে
            >
              {disabledButtons[product.id] ? "✅ Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {/* 🛒 কার্ট */}
      <div className="w-1/2 p-5 border">
        <h2 className="text-xl font-bold mb-4">🛒 আপনার কার্ট</h2>
        {cart.length === 0 ? (
          <p>⚠️ কার্ট খালি!</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex justify-between p-2 border-b">
              <span>{item.name} - {item.price}৳</span>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(index, item)}
              >
                ❌ Remove
              </button>
            </div>
          ))
        )}
        <hr className="my-2" />
        <h3 className="text-lg font-bold">মোট: {total}৳</h3>
      </div>
    </div>
  );
}

export default App;