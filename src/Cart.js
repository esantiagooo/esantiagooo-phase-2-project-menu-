import React from "react";

function Cart({cartItems}){
    
    

    return(
        <div>
            {cartItems.length === 0 ? 
            <h2 className="Empty-cart">Cart is empty</h2> : 
            <ul className="row">{cartItems.map((item) =>(
                  <div>
                          <div className= "card" >
                              <h2 className="itemName">{item.name}</h2>
                              <p className="itemDescription">{item.description}</p>
                              <p className="itemPrice">{item.price}</p>
                              {/* <button className="button" onClick={(e)=> addToCart(e)}>Add to cart</button> */}
                          </div>
                    
                  
                  </div>
                  ))}</ul> 
            } 
        </div>
    )
}
export default Cart