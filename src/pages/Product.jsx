import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../component/Breadcrums/Breadcrums';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../component/DiscriptionBox/DiscriptionBox';
import RelatedProducts from '../component/RelatedProducts/RelatedProducts.jsx'
import CartItem from '../component/CartItems/CartItem.jsx';

function Product() {
 const {all_product}=useContext(ShopContext);
 const {productId}=useParams();
const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <RelatedProducts/>
      <CartItem/>
    </div>
  )
}

export default Product
