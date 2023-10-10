import React from 'react'
import product from "./product"
const Image = () => {
  return (
    <div style ={{display:'flex', justifyContent:'center'}}>
        <img style ={{width:400}}src={product.image}/>

        </div>
  )
}

export default Image