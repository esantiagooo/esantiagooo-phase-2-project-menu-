import React, { useEffect, useState} from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import ShoppingCart from "./ShoppingCart";

function OrderFood(){
    const[filterBy, setFilterBy]= useState("All")
    const[menuItem, setMenuItem] = useState([])
    const[cartItems, setCartItem] = useState([])

useEffect(()=>{
    fetch("http://localhost:3000/Pizza")
    .then((r)=> r.json())
    .then((menuItem) => setMenuItem(menuItem))
    .catch(err => console.log('hi'))
},[])

function handleFilterBy(category){
    setFilterBy(category)
}

function handleAddItem(newProduct){
    setMenuItem([...menuItem, newProduct ])
}
const itemsToDisplay = menuItem.filter((item)=>{
    if(filterBy === "All"){
        return true
    }else{
        return item.category === filterBy
    }
})

    return(
        <main   className="col-2">
            <Filter category={filterBy} onCategoryChange={handleFilterBy}/>
            <ItemForm onAddItem={handleAddItem} />

            <h1 className="Food-title">Menu</h1> <ShoppingCart cartItems={cartItems}/>
                <div className="item-container">
                  <ul className="row">{itemsToDisplay.map((item) =>(
                  <div key={item.id}>
                          <div className= "card" key={item.id}>
                              <h2>{item.name}</h2>
                              <p>{item.description}</p>
                              <p>{item.price}</p>
                              <button className="button">Add to cart</button>
                          </div>
                    
                  
                  </div>
                  ))}</ul>  
                </div>
        </main>
    )
}

export default OrderFood