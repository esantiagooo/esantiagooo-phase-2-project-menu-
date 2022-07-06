import React from "react";

function Cart({cartItems}){
    
    

    return(
        <div>
            <h1 className="cart-items">Cart Items</h1>
            {cartItems.length === 0 ? 
            <h2 className="Empty-cart">Cart is empty</h2> : 
            <ul className="row">{cartItems.map((item) =>(
                  <div  key={item.id}>
                          <div className= "card" key={item.id} >
                              <h2 className="itemName">{item.name}</h2>
                              <p className="itemDescription">{item.description}</p>
                              <p className="itemPrice">{item.price}</p>
                              <button className="button" >Remove</button>
                          </div>
                    
                  
                  </div>
                  ))}</ul> 
            } 
        </div>
    )
}
export default Cart