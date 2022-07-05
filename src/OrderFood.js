import React, { useEffect, useState} from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";


function OrderFood({cartItems, setCartItems}){
    const[filterBy, setFilterBy]= useState("All")
    const[menuItem, setMenuItem] = useState([])

useEffect(()=>{
    fetch("http://localhost:3000/Pizza")
    .then((r)=> r.json())
    .then((menuItem) => setMenuItem(menuItem))
    .catch(err => console.log('check if database is running'))
},[])

function handleFilterBy(category){
    setFilterBy(category)
}

function handleAddItem(newProduct){
    setMenuItem([...menuItem, newProduct ])
}
function addToCart(cartItem){
    const item = {}
    const parentDiv = cartItem.target.parentNode
    item.name = parentDiv.querySelector(".itemName").textContent
    item.description = parentDiv.querySelector(".itemDescription").textContent
    item.price = parentDiv.querySelector(".itemPrice").textContent
    cartItems.push(item)
    setCartItems(cartItems)
}
const itemsToDisplay = menuItem.filter((item)=>{
    if(filterBy === "All"){
        return true
    }else{
        return item.category === filterBy
    }
})

    return(
        <main>
            <h2 className="Food-title">Menu</h2> 
            <Filter category={filterBy} onCategoryChange={handleFilterBy}/>
            <ItemForm onAddItem={handleAddItem} />

           
                <div className="item-container">
                  <ul className="row">{itemsToDisplay.map((item) =>(
                  <div key={item.id}>
                          <div className= "card" key={item.id}>
                              <h2 className="itemName">{item.name}</h2>
                              <p className="itemDescription">{item.description}</p>
                              <p className="itemPrice">{item.price}</p>
                              <button className="button" onClick={(e)=> addToCart(e)}>Add to cart</button>
                          </div>
                    
                  
                  </div>
                  ))}</ul>  
                </div>
        </main>
    )
}

export default OrderFood