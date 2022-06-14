import React, {useState, useEffect} from "react";

function OrderFood(){
    const[menu, setMenu] = useState([])
useEffect(()=>{
    fetch("http://localhost:3000/menu")
    .then((r)=> r.json())
    .then((menu) => console.log(menu))
},[])

    return(
        <div>
            <h1>I will add something later</h1>
        </div>
    )
}

export default OrderFood