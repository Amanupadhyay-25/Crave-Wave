import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return(
        <div className="text-2xl m-4 p-4 text-center">
            <h1 className="font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button 
            className="text-white rounded-md bg-black p-2 m-2  "
            onClick={handleClearCart}>
             Clear Cart 
             </button>
               <ItemList items={cartItems}/>
            </div>
        </div>
    )
}


export default Cart;