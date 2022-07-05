import React from "react";

function Cart({cartItems}){
    
    

    return(
        <div>
            {cartItems.length === 0 ? 
            <div>Cart is empty</div> : 
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