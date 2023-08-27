import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { useCartContext } from "../context/CartContext";

const Products = () => {
  // Custom Hooks
  const products = useProductContext();
  const { cartItems, addToCart, removeFullFromCart } = useCartContext();

  //Other Hooks
  const [filteredProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");

  useEffect(() => {
    let updatedFilteredProducts = products;

    // Filter by Category
    if (category !== "All") {
      updatedFilteredProducts = updatedFilteredProducts.filter(
        (item) => item.category === category
      );
    }

    // Filter by Price
    if (priceFilter === "400+") {
      updatedFilteredProducts = updatedFilteredProducts.filter(
        (item) => item.price > 400
      );
    } else if (priceFilter !== "All") {
      const price = priceFilter.split(",");
      updatedFilteredProducts = updatedFilteredProducts.filter(
        (item) => item.price >= price[0] && item.price < price[1]
      );
    }

    // Final Filtered Products Array
    setFilterProducts(updatedFilteredProducts);
  }, [category, priceFilter, products]);

  return (
    <div className="container text-center mx-auto  ">
      <h1 className="text-3xl font-semibold py-4 tracking-wider">Store</h1>

      {/* Filter Section  */}
      <section className="flex justify-evenly max-md:flex-col items-center gap-4 md:py-2 md:gap-2">
        {/* Category  */}
        <div className="space-x-4">
          <button
            onClick={() => setCategory("All")}
            className={`${
              category === "All" ? "bg-black text-white" : ""
            } py-1 w-16 font-semibold text-sm border border-black rounded-lg ease-in-out duration-100 hover:scale-105`}
          >
            All
          </button>
          <button
            onClick={() => setCategory("Men")}
            className={`${
              category === "Men" ? "bg-black text-white" : ""
            } py-1 w-16 font-semibold text-sm border border-black rounded-lg ease-in-out duration-100 hover:scale-105`}
          >
            Men
          </button>
          <button
            onClick={() => setCategory("Women")}
            className={`${
              category === "Women" ? "bg-black text-white" : ""
            } py-1 w-16  font-semibold text-sm border border-black rounded-lg ease-in-out duration-100 hover:scale-105`}
          >
            Women
          </button>
          <button
            onClick={() => setCategory("Unisex")}
            className={`${
              category === "Unisex" ? "bg-black text-white" : ""
            } py-1 w-16  font-semibold text-sm border border-black rounded-lg ease-in-out duration-100 hover:scale-105`}
          >
            Unisex
          </button>
        </div>
        {/* Price  */}
        <div className="flex gap-2 items-center">
          <h1 className="font-semibold">Price :</h1>
          <select
            onChange={(e) => setPriceFilter(e.target.value)}
            className="focus:none  outline-none bg-transparent border-2 border-black rounded-lg p-1  text-sm font-semibold"
          >
            <option defaultValue value="All">
              All
            </option>
            <option value={[0, 100]}>$0-$100</option>
            <option value={[100, 200]}>$100-$200</option>
            <option value={[200, 300]}>$200-$300</option>
            <option value={[300, 400]}>$300-$400</option>
            <option value="400+">$400+</option>
          </select>
        </div>
      </section>

      {/* Product Display  */}
      <div className="flex flex-wrap gap-3 justify-evenly ">
        {filteredProducts.length === 0 ? (
          <div className="h-[70vh] w-full text-xl font-semibold flex justify-center items-center">
            No Item Found
          </div>
        ) : (
          filteredProducts.map((item) => {
            return (
              <div
                className="bg-blue-50 shadow-xl rounded-xl flex flex-col  p-4 mt-6 text-left w-[90%] md:w-[20rem] h-[35rem] md:h-[30rem]"
                key={item.id}
              >
                <img
                  src={item.img_url}
                  alt="Product Image"
                  className="object-cover h-[70%] w-full rounded-xl"
                />
                <div className="h-[30%] flex-col flex justify-around  ">
                  <div>
                    <p className="text-sm text-slate-700">{item.category}</p>
                    <h1 className="text-xl text-bold truncate">{item.name}</h1>
                    <p className="font-semibold text-lg">${item.price}</p>
                  </div>
                  {cartItems.find((cartItem) => cartItem.id === item.id) ? (
                    // Remove From Cart Button
                    <button
                      onClick={() => removeFullFromCart(item)}
                      className="bg-red-600 text-white font-semibold w-full rounded-lg py-2 mt-2"
                    >
                      Remove
                    </button>
                  ) : (
                    // Add From Cart Button
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-black text-white font-semibold w-full rounded-lg py-2 mt-2"
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
