import React from 'react'

const index = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Best Selling Products</h2>
        <p>Cameras of many variations</p>
      </div>

      <div>
        {["Product1","Product2"].map((product)=> 
          product
        )}
      </div>

      footer
    </>
  )
}

export default index