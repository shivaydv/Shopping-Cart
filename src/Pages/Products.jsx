import React from 'react'
import { useProductContext } from '../context/ProductContext'
import { useCartContext } from '../context/CartContext';

const Products = () => {

    const products = useProductContext();
    const { cartItems, addToCart,removeFullFromCart } = useCartContext();


  return (
    <div className='container text-center mx-auto '>
        <h1 className='text-3xl font-semibold py-4 tracking-wider'>Store</h1>
        
        <div className='flex flex-wrap gap-3 justify-evenly '>
            {
                products.map((item)=>{
                    return(
                        <div className='bg-blue-50 shadow-xl rounded-xl flex flex-col  p-4 mt-6 text-left w-[90%] md:w-[20rem] h-[35rem] md:h-[30rem]' key={item.id}>
                            <img src={item.img_url} alt="Product Image" className='object-cover h-[70%] w-full rounded-xl' />
                            <div className='h-[30%] flex-col flex justify-around  '>
                                <div>
                                <p className='text-sm text-slate-700'>{item.category}</p>
                                <h1 className='text-xl text-bold truncate'>{item.name}</h1>
                                <p className='font-semibold text-lg'>${item.price}</p>
                                </div>
                                {
                                    cartItems.find((cartItem) => cartItem.id === item.id)?
                                    <button onClick={() => removeFullFromCart(item)} className='bg-red-600 text-white font-semibold w-full rounded-lg py-2 mt-2'>Remove</button>
                                    :
                                    <button onClick={() => addToCart(item)} className='bg-black text-white font-semibold w-full rounded-lg py-2 mt-2'>Add To Cart</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products