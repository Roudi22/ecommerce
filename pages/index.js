import React from 'react'

const index = () => {
  return (
    <>
      HeroBanner
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Cameras of many variations</p>
      </div>

      <div className='products-container'>
        {["Product1","Product2"].map((product)=> 
          product
        )}
      </div>

      footer
    </>
  )
}

export default index