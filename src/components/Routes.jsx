import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Whishlist from './Whishlist'

const RoutesC = () => {
  return (
<>
<Routes>
<Route path='/whishlist' element={<Whishlist/>}/>
<Route path='/' element={<Products/>}/>

</Routes>
</>  )
}

export default RoutesC