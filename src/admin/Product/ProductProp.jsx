import { useState } from "react"

const ProductProp = ({no ,name, price, imagesrc ,btn}) => {
  
  return (
    <>
    <div className="product-first">
      <div>
        {no}
        <img src={imagesrc}  />
        <p>{name}</p>
        <p> <span> Rs </span>: {price}</p>
        <button>{btn}</button>
        </div>
    </div>
    </>
  )
}

export default ProductProp
