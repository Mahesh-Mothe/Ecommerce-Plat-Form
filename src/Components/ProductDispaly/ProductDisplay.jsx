import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
export default function ProductDisplay(props) {
    const {product}=props
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='product-display'>
    <div className='product-display-left'>
      <div className='product-image-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
      </div>
      <div className='productdisplay-image'>
        <img className='productdispaly-image-main' src={product.image} alt='' />
      </div>
    </div>
     <div className='productdisplay-right'>
       <h1>{product.name}</h1>
       <div className='productdisplay-right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>122</p>
       </div>
       <div className='productdisplay-right-prices'>
          <div className='product-right-old'>${product.old_price}</div>
          <div className='product-right-new'>${product.new_price}</div>
       </div>
       <div className='product-description'>
         <p>
         Crafted with care from high-quality cotton,
          our hoodie promises a soft and comfy feel; Suitable for men and women alike, 
          its casual yet fashionable design will have you wrapped in coziness all day long
         </p>
       </div>
       <div className='product-right-size'>
        <h1>Select Size</h1>
        <div className='product-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
       </div>
       <button onClick={()=>{addToCart(product.id)}}>ADD TO Cart</button>
       <p className='product-right-category'><span>Category :</span> Women Crop Top</p>
       <p className='product-right-category'><span>Tags :</span>Modern Latest</p>

     </div>

    </div>
  )
}
