import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";
import { CART_URL } from "../utils/constants";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);

    //card function using redux
    let totalPrice = 0;

    cartItems.map((item) => {
      let price =
  
        (item?.card?.info?.price / 100)
        || (item?.card?.info?.defaultPrice / 100);
  
      totalPrice += price;
  
      return totalPrice;
  
    });

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return cartItems.length==0?(
        <div className="flex items-center justify-center space-x-4">
            <img  src={CART_URL} />
        <p className="shadow-md font-medium  text-xl  py-8 px-5"> Your cart is empty...Add some delicious items to your cart!</p>
        </div>
    ):(
        <>
<div className="text-2xl m-4 p-4 text-center bg-gray-100 shadow-lg rounded-lg">
<h1 className="font-extrabold text-4xl font-serif mb-6 py-5 text-gray-900 bg-gradient-to-r from-blue-300 to-pink-300 ">
  Cart
</h1>

  <div className="w-6/12 m-auto">
    <button 
      className="text-white rounded-md bg-green-600 p-3 m-2 shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
      onClick={handleClearCart}>
      Clear Cart
    </button>
    <ItemList items={cartItems}/>
  </div>
</div>

        </>
    )
}


export default Cart;