import React from 'react';
import data from '../data';
import { Link, useParams } from "react-router-dom";
function ProductScreen(props){
   const {id} = useParams();
  const product = data.products.find(x=> x._id == id)
  console.log(id);
  return (
    <div>
    <div className='back-to-result'>
    <button><Link to='/' >Back to Results</Link></button>
        
    </div>
    <div className='details'>
        <div className='details-image'>
            <img src={product.image} alt="product-image"></img>
        </div>
        <div className='details-info'>
            <ul>
                <li><h4>{product.name}</h4></li>
                <li>{product.rating} Stars({product.numReviews} Reviews)</li>
                <li>
                Price :<b>${product.price}</b>
                </li>
                <li>Description:
                {product.description}</li>
            </ul>
        </div>
        <div className='details-action'>
          <ul>
              <li>Price : {product.price}</li>
              <li>Status : {product.status}</li>
              <li>QTY: <select><option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              </select></li>
              <li><button className='button'>ADD TO CART</button></li>
          </ul>
        </div>
    </div>
    
    </div>
  );
    
}

export default ProductScreen;