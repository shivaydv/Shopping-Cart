import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"


export default function Cart () {


  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useCartContext()


  return (
    <div className={`flex max-md:flex-col  container mx-auto h-screen  `}>


      <section className="md:w-3/4 md:h-[90vh]  p-6 w-full overflow-y-scroll">
      <h1 className="text-2xl font-bold w-full text-center pb-3">Your Cart</h1>
      <div className="flex flex-col gap-4 md:gap-2 h-full ">
      {cartItems.map((item) => (
            <div className="flex max-md:flex-col max-md:items-start max-md:space-y-2 justify-between items-center " key={item.id}>
              <div className="flex gap-4 items-center">
                <img src={item.img_url} alt="Product" className="rounded-md h-32 object-cover w-32" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.name}</h1>
                  <p className="text-gray-600">${Math.round(item.price *item.quantity)}</p>
                </div>
              </div>
              <div className="flex md:gap-4 max-md:justify-between max-md:w-full">
                <p className="text-lg font-semibold">Quantity: </p>
                <div className="flex gap-4">

                <button
                  className="px-4 py-2 bg-black text-white text-xs font-bold  rounded-lg "
                  onClick={() => {
                    removeFromCart(item)
                  }}
                  >-</button>

                <p>{item.quantity}</p>

                <button
                  className="px-4 py-2 bg-black text-white text-xs font-bold  rounded-lg "
                  onClick={() => {
                    addToCart(item)
                  }}
                >+ </button>
                  </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center py-2">
            {
              cartItems.length>0?
              <button onClick={clearCart} className="bg-red-600 max-md:mt-4 p-2 rounded-lg text-white font-semibold">Remove All</button>
              :
              <div className="font-semibold gap-6 flex flex-col items-center justify-center max-md:h-[50vh] h-[60vh] ">
                <p>Nothing to Buy</p>
                <Link to={"/products"} className="bg-black p-2 rounded-lg text-white font-semibold">Add Products</Link>
              </div>
            }

          </div>
          </div>
          
      </section>


      <aside className="md:w-1/4 h-full md:shadow-xl max-md:pt-0 p-6 md:fixed md:right-0 ">
        <h1 className="text-2xl font-bold tracking-wide">Summary</h1>
        <div className="font-semibold text-base flex flex-col gap-2 leading-relaxed mt-4 pb-4 border-b-2 border-black">
          <div className="flex justify-between">
          <p className="  ">Subtotal: </p>
          <p>${cartItems.length>0?getCartTotal():0}</p>
          </div>
          <div className="flex justify-between">
          <p className="">Shipping Charges: </p>
          <p>${cartItems.length>0?10:0}</p>
          </div>
          

          <div className={` ${cartItems.length===0 && "hidden"} flex justify-between`}>
          <p className=""> Special Discount: </p>
          <p className="text-red-600">-$10</p>
          </div>
          
          
          <div className="flex justify-between">
          <p className="">Estimated Taxes: </p>
          <p>$0</p>
          </div>
        </div>
        <div className="flex justify-between w-full py-4 text-lg font-bold tracking-wide">
          <p>Total :</p>
          <p>${cartItems.length>0?getCartTotal():0}</p>
        </div>
        {cartItems.length>0 && <button className="w-full bg-black p-2 rounded-lg text-white font-semibold tracking-wide mt-10">Buy Now</button>}
      </aside>
    </div>
    
      
    
  )
}
