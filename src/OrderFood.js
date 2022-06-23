import React, { useEffect, useState} from "react";
import Filter from "./Filter";

function OrderFood(){
    const[filterBy, setFilterBy]= useState("All")
    const[menu, setMenu] = useState([])

useEffect(()=>{
    fetch("http://localhost:3000/menu")
    .then((r)=> r.json())
    .then((data) => setMenu(data))
    .catch(err => console.log('hi'))
},[])

function handleFilterBy(category){
    setFilterBy(category)
}
 const itemsDisplay = menu.filter((item)=>{
     if(filterBy === "All"){
         return true
     }else{
         return item.category === filterBy
     }
 })

    return(
        <div>
            <Filter category={filterBy} onCategoryChange={handleFilterBy}/>
            <h1>I will add something later</h1>
                <div className="item-container">
                  <ul>{itemsDisplay.map((item, index) =>(
                  <div key={index}>
                  {item.Pizza.map((pizza, index)=>{
                      return (
                          <div className= "card" key={index}>
                              <h2>{pizza.name}</h2>
                              <p>{pizza.description}</p>
                              <p>{pizza.price}</p>
                          </div>
                      )
                  })}
                  {item.Quesadillas.map((quesadilla, index)=>{
                      return (
                          <div className="card" key={index}>
                              <h2>{quesadilla.name}</h2>
                              <p>{quesadilla.price}</p>
                          </div>
                      )
                  })}
                  {item.Tortas.map((torta, index)=>{
                      return (
                          <div className="card" key={index}>
                              <h2>{torta.name}</h2>
                              <p>{torta.price}</p>
                          </div>
                      )
                  })}
                  </div>
                  ))}</ul>  
                </div>
        </div>
    )
}

export default OrderFood