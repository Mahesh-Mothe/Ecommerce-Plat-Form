import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'
export default function CartItems() {
    const{all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartItems'>
   <div className='cartitems-format-main'>
     <p>Products</p>
     <p>Title</p>
     <p>Price</p>
     <p>Quantity</p>
     <p>Total</p>
     <p>Remove</p>
   </div>
   <hr />
   {all_product.map((e)=>{
     if(cartItems[e.id]>0){
          return <div>
             <div className='cartitems-format cartitems-format-main'>
              <img src={e.image} alt='' className='carticon-product-icon'/>
              <p>{e.name}</p>
              <p> ${e.new_price}</p>
              <button className='cartitem-quantity'>{cartItems[e.id]}</button>
              <p>{e.new_price*cartItems[e.id]}</p>
              <img src={remove_icon} alt='' className='remove-icon' onClick={()=>{removeFromCart(e.id)}}/>
             </div>
          </div>
     }
     return null;
   })}
   <div className='cartItems-down'>
   <div className='cartItems-total'>
      <h1>Total Items</h1>
      <hr />
      <div>
        <div className='cartTotal-item'>
          <p>SubTotal</p>
          <p>${0}</p>
        </div>
        <hr />
        <div className='cartTotal-item'>
           <p>Shipping</p>
           <p>Free</p>
        </div>
        <hr />
        <div className='cartTotal-item'>
          <h3>Total</h3>
          <h3>${0}</h3>
        </div>
        <button>Proceed To Checkout</button>
      </div>
   </div>
   </div>
    </div>
  )
}
