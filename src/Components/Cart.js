import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItem, setCartItem }) => {

  const totalPrice = cartItem.reduce((price,item)=> price + item.Price * item.quantity , 0)
  
  const incress = (product)=>{
    const exist = cartItem.find((x)=>{
      return x.id === product.id;
    })
    
    setCartItem(cartItem.map((item)=>{
      return item.id === product.id ? {...exist,quantity: exist.quantity + 1} : item;
    }))
  }
  
  const decress = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
  
    if (exist.quantity === 1) {
      // Remove the item from the cart if quantity is already 1
      removecart(product);
    } else {
      // Decrease the quantity by 1
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item
        )
      );
    }
  };
  
  
  function removecart(product){
    const exist = cartItem.find((x)=>{
      return x.id === product.id;
    })

    if (exist) {
      setCartItem(cartItem.filter((x)=>{
        return x.id !== product.id;
      }))
    }
  }

  function checkOut(){
    alert(`Your Bill is ${totalPrice}`)
  }
  
  return (
    <>
      {cartItem.length === 0 ? (
        <>
          <h1 className='empty-cart'>Cart Is Empty</h1>
          <Link to='/'>
            <button className='cart_shop'>Shopping</button>
          </Link>
        </>
      ) : (
        <div className='cart_container'>
          <div className='cart_product'>
            {cartItem.map((item) => (
              <div className='cart_box' key={item.id}>
                <div className='cart_product_container'>

                  <div className='cart_product_img'>
                    <img src={item.Image} alt={item.Title} />
                  </div>

                  <div className='cart_item_details'>
                    <h2>{item.Title}</h2>
                    <h4>{item.Price} Rs.</h4>
                    <button className='quantity_dec' onClick={()=> decress(item)}>-</button>
                    <input className='' type='text' value={item.quantity}></input>
                    <button className='quantity_inc' onClick={()=> incress(item)}>+</button>
                    <h3>{item.quantity * item.Price}  Rs..</h3>
                  </div>

                  <button className='remove_btn' onClick={()=> removecart(item)}>X</button>
                </div>
              </div>))}

          </div>
        </div>
      )}

      {cartItem.length > 0 && <>
        <p className='total_price'>Total:- {totalPrice} Rs. </p>
        <button className='checkout' onClick={()=>checkOut()}>Check Out</button>
      </>}
    </>
  );
};

export default Cart;
