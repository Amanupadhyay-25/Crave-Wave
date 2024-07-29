import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItem} from "../utils/cartSlice"



const ItemList=({items})=>{


  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
//Dispatch an Action
  dispatch(addItem(item));  // it will go and update reducer

  console.log(item);
  };


    return(
      <div >
        <hr className="   bg-gray-200 h-0.5 m-auto mt-5 mb-5 "></hr>
        {items.map((item)=>(
            <div key={item.card.info.id}
            className='flex p-1 gap-2 bg-white items-center lg:w-auto sm:w-auto 
    mx-auto m-4 justify-between'
    >
             
            <div   className='w-3/4'>
                <h4 className='font-medium  lg:text-lg sm:font-medium min-[320px]:text-sm '>{item.card.info.name}</h4>
                <p  className='font-medium text-sm sm:font-medium min-[320px]:text-sm'>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className=' text-sm'>{item.card.info.description}</p>
              </div>
            
                
                <div className='flex flex-col gap-1'>
                <img src={CDN_URL+item.card.info.imageId} className="w-40  border-2 rounded-lg"/>
              <button className='bg-green-400 text-white p-2 px-4 rounded-lg mt-1'
              onClick={()=>handleAddItem(item)}
              >
                ADD +</button>
              </div>
             
        </div>
    ))}
      </div>
    )
}

export default ItemList;