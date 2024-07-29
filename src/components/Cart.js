import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";

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
        <h1 className="text-center shadow-md font-bold text-wrap text-3xl py-8 bg-sky-300">Plzz first add some items in your cart</h1>
    ):(
        <>
        <div className="text-2xl m-4 p-4 text-center">
            <h1 className="font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button 
            className="text-white rounded-md bg-black p-2 m-2  "
            onClick={handleClearCart}>
             clearCart
             </button>
               <ItemList items={cartItems}/>
            </div>
        </div>
        </>
    )
}


export default Cart;