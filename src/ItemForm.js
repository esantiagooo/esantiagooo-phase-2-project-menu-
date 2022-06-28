import React, { useState } from "react";

function ItemForm(){
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Product")

    function handleSubmit(e){
        e.preventDefault()
        const itemInfo ={
            name: name,
            category: category,
            price: price
        }
        console.log(itemInfo)
    }
    return (
        <form className="NewItem" onSubmit={handleSubmit}>
            <label  htmlFor="items name">Item's name:</label>
            <input type="text" name ="name" value={name} onChange={(e)=>setName(e.target.value)}></input>

            <label  htmlFor="items price">Item's price:</label>
            <input  type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} ></input>
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