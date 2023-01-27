import React from 'react'
import './product.css';


const Whishlist = () => {
    let array = JSON.parse(localStorage.getItem('array'));
  return (
    <div className='backG'>
        {array.map(res=>(<div className='pcard'>
            <img src={res.image} alt="" />
            <p>Brand: {res.brand}</p>
            <p>Title: {res.title}</p>
            <p>Category: {res.category}</p>
           <p>price: {res.price}</p> 
           </div>))}
    </div>
  )
}

export default Whishlist