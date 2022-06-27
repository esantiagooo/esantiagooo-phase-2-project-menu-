import React, { useState } from "react";

function ItemForm(){
    const [name, setName] = useState("")
    const [category, setCategory] = useState("Product")

    function handleSubmit(e){
        e.preventDefault()
        console.log("name:", name)
        console.log("category:", category)
    }
    return (
        <form className="NewItem" onSubmit={handleSubmit}>
            <label  htmlFor="items name">Item's name:</label>
            <input type="text" name ="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            
             <label  htmlFor="items name">Category:</label>
            <select name ="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Produce">Add by category</option>
                <option value="Pizza">Pizza</option>
                <option value="Quesadillas">Quesadillas</option>
                <option value="Tortas">Tortas</option>
            </select>

            <button type="submit"> Add to menu</button>

        </form>
    )
}
export default ItemForm