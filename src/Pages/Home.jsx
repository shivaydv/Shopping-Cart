import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const Home = () => {
  //custom Hooks For Product Context
  const products = useProductContext();

  //filter the featured products
  const Featured = products.filter((product) => {
    return product.feature == true;
  });

  return (
    <>
    {/* Hero Section  */}
      <main className="container mx-auto flex px-5 max-md:flex-col  md:items-center md:justify-center">

        {/* Left Side */}
        <section className="md:w-1/2 max-md:text-center space-y-6  max-md:my-12">
          <h1 className="font-bold  text-2xl lg:text-4xl tracking-wide  ">
            Elevate Your Every Step
            <br />
            Where Comfort Meets Style!
          </h1>
          <p className="text-lg  tracking-wide text-slate-700 max-md:text-base">
            Explore our curated collection of premium shoes for a seamless blend
            of fashion and comfort that sets your journey in motion.
          </p>
          
          {/* Call to Action For Product Page  */}
          <Link to={"/products"}>
            <button className="hover:bg-black hover:text-white duration-150 ease-in-out p-2 my-4 border-2 border-slate-700 font-semibold">
              Shop Now
            </button>
          </Link>
        </section>

        {/* Right Side */}
        <section className="md:w-1/2 md:h-[88vh] max-md:w-[70vw] max-md:mx-auto max-md:mb-12  p-4 md:p-8  flex justify-end  ">
          <img
            className="object-contain object-center rounded h-full"
            alt="hero"
            src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
          />
        </section>
      </main>

      {/* Featured Section  */}
      <section className="container mx-auto text-center py-2 flex flex-col">
        <h1 className="text-2xl font-bold tracking-wide">Featured Shoes</h1>

        {/* Featured Products  */}
        <div className="w-full flex flex-wrap justify-evenly py-4">
          {Featured.map((item) => {
            return (
              <div
                className="bg-blue-50 shadow-xl rounded-xl flex flex-col  px-4 py-4 mt-6 text-left w-[90%] md:w-[20rem] h-[35rem] md:h-[30rem]"
                key={item.id}
              >
                <img
                  src={item.img_url}
                  alt="Product Image"
                  className="object-cover h-[80%] w-full rounded-xl"
                />
                <div className="h-[20%] flex-col flex justify-center gap-1 ">
                  <p className="text-sm text-slate-700">{item.category}</p>
                  <h1 className="text-xl text-bold truncate">{item.name}</h1>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action For Product Page  */}
        <Link to={"/products"}>
          <button className=" p-2 my-10 text-white duration-100 ease-in-out hover:scale-105 bg-black rounded-lg font-semibold">
            Explore More
          </button>
        </Link>
      </section>
    </>
  );
};

export default Home;
