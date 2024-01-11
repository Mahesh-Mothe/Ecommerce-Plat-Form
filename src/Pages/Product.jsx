import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCum from '../Components/BreadCum/BreadCum'
import ProductDisplay from '../Components/ProductDispaly/ProductDisplay'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

export default function Product() {
  const {all_product} =useContext(ShopContext)
  const {productID}=useParams()
  const product=all_product.find((e)=>e.id===Number(productID))
  return (
    <div className=''>
   <BreadCum product={product}/>
  <ProductDisplay product={product}/>
  <RelatedProduct />
    </div>
  )
}
