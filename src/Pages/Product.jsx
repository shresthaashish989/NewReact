import React from 'react'
import Card from '../Components/Card'

const Product = () => {
  return (
   <>
   <div className='Pproductpage my-18'>
    <h1 className='text-center text-3xl text-red-600'>Our Products</h1>
    <div className='my-5'>
        <Card/>
    </div>

    <div className='my-5'>
        <Card/>
    </div>

    <div className='my-5'>
        <Card/>
    </div>

    <div className='my-5'>
        <Card/>
    </div>
   </div>
   </>
  )
}


export default Product
