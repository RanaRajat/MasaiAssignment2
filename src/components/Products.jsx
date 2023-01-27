import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './product.css';
const Products = () => {
     const [response, setResponse] = useState([]);
     const [arr, setArr] = useState([]);
     const [wish, setWish] = useState('');
     const checkbox = (e)=>{
        setArr([...arr, e]);
     }
    const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?`
    useEffect(()=>{
        axios.get(url).then(res=>setResponse(res.data.data));
    }, []);
    useEffect(()=>{
        localStorage.setItem('array',JSON.stringify(arr));
    }, [arr]);

   
  return (
    <div className='backG'>
        {response.map(res=>(<div className='pcard'>
            <img src={res.image} alt="" />
            <p>Brand: {res.brand}</p>
            <p>Title: {res.title}</p>
            <p>Category: {res.category}</p>
           <p>price: {res.price}</p> 
           <label>Whishlist: </label>
           <input type="checkbox" name="" id={res.id} value='' onClick={()=>checkbox(res)} />

           </div>))}
    </div>
  )
}

export default Products