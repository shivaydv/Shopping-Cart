import React from 'react'
import logo from "../assets/logo.png"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';

const Navbar = () => {

  const {cartItems} = useCartContext();

  return (
    <nav className='flex bg-blue-100 shadow-sm sticky top-0  container mx-auto text-black  items-center justify-between max-md:px-6 w-full py-2'>
      <section className='flex items-center gap-12 '>
        <Link to={"/"}><img src={logo} alt="Logo" className="max-md:self-start" /></Link>
        <div className="gap-8 flex max-md:hidden">
          <Link to="/" className="font-semibold">Home</Link>
          <Link to="/products" className="font-semibold">Products</Link>
        </div>
      </section>
      <div className="gap-8 flex md:hidden">
          <Link to="/" className="font-semibold">Home</Link>
          <Link to="/products" className="font-semibold">Products</Link>
        </div>
      
      <Link to={"/cart"}><section className='relative cursor-pointer '>
        <AiOutlineShoppingCart size={28}/>
        <p className={`${cartItems.length === 0?"hidden":"absolute"}  text-white bottom-0 right-0 bg-red-600 w-4 h-4 translate-x-1 translate-y-1 text-sm md:pb-[2px]  flex justify-center items-center rounded-full`}>{cartItems.length}</p>
      </section></Link>
    </nav>
  )
}

export default Navbar