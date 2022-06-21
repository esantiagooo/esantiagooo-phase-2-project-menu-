import React, { useEffect, useState} from "react";
// import MenuCard from "./MenuCard";

function OrderFood(){
    const[menu, setMenu] = useState([])
useEffect(()=>{
    fetch("http://localhost:3000/menu")
    .then((r)=> r.json())
    .then((data) => setMenu(data))
    .catch(err => console.log('hi'))
},[])

    return(
        <div>
            <h1>I will add something later</h1>
                <div className="item-container">
                  <ul>{menu.map((item, index) =>(
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