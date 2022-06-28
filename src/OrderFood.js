import React, { useEffect, useState} from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function OrderFood(){
    const[filterBy, setFilterBy]= useState("All")
    const[menu, setMenu] = useState([])

useEffect(()=>{
    fetch("http://localhost:3000/Pizza")
    .then((r)=> r.json())
    .then((data) => setMenu(data))
    .catch(err => console.log('hi'))
},[])

function handleFilterBy(category){
    setFilterBy(category)
}

function handleAddItem(newProduct){
    setMenu(...menu, newProduct )
}
const itemsToDisplay = menu.filter((item)=>{
    if(filterBy === "All"){
        return true
    }else{
        return item.category === filterBy
    }
})

    return(
        <div>
            <Filter category={filterBy} onCategoryChange={handleFilterBy}/>
            <ItemForm onAddItem={handleAddItem} />

            <h1>I will add something later</h1>
                <div className="item-container">
                  <ul>{itemsToDisplay.map((item) =>(
                  <div key={item.id}>
                          <div className= "card" key={item.id}>
                              <h2>{item.name}</h2>
                              <p>{item.description}</p>
                              <p>{item.price}</p>
                          </div>
                    
                  
                  </div>
                  ))}</ul>  
                </div>
        </div>
    )
}

export default OrderFood