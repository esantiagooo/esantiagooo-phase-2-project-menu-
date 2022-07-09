import React from "react";

function Cart({cartItems, setCartItems}){

function removeItem(deleteItem){
    
    for(let i = 0 ; i < cartItems.length; i++){
        if(deleteItem.querySelector(".itemName").textContent === cartItems[i].name){
            cartItems.splice(i ,1)
            
            break
        }
    }
   
   setCartItems([...cartItems])
}
    
    

    return(
        <div  className="card-holder"  >
            <h1 className="cart-items">Cart Items</h1>
            {cartItems.length === 0 ? 
            <h2 className="Empty-cart">Cart is empty</h2> : 
            <ul className="row">{cartItems.map((item,index) =>(
                  <div  key={index}>
                          <div className= "card" key={index} >
                        
                              <h2 className="itemName">{item.name}</h2>
                              <p className="itemDescription">{item.description}</p>
                              <p className="itemPrice">{item.price}</p>
                              <p  className="itemIndex">{index}</p>
                              <button className="button"    
                              onClick={(e)=>removeItem(e.target.parentNode)} >Remove</button>
                          </div>
                    
                  
                  </div>
                  ))}</ul> 
            } 
        </div>
    )
}
export default Cart