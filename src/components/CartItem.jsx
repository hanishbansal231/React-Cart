import React from 'react'
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice';
function CartItem({item}) {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
    }
      return (
    <div>
        <div>
            <div>
                <img src={item.image} alt='productImage' />
            </div>
            <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
               <div>
               <p>{item.price}</p>
               <div onClick={removeFromCart}><AiFillDelete /></div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem