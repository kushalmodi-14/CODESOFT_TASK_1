import React from 'react'
import './../Components/Style.css'
import ProductDetails from './ProductDetails'

const Product = ({ addToCart }) => {
  return (
    <>
      <div className='product-container'>
        <div className='main-product'>
          {
            ProductDetails.map((curEle) => {
              return (

                <div className='box' key={curEle.id}>
                  <div className='imgBox'>
                    <img src={curEle.Image} alt='....'></img>
                  </div>

                  <div className='details'>
                    <h4>{curEle.Category}</h4>

                    <div className='info'>
                      <h2>{curEle.Title}</h2>
                      <p>{`${curEle.Price} Rs.`}</p>
                    </div>

                    <button className='addToCart' onClick={() => addToCart(curEle)}>Add To Cart</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Product