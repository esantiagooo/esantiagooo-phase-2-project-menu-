import React, { useState } from "react";

function ItemForm(){
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Product")

    function handleSubmit(e){
        e.preventDefault()
        const itemInfo ={
            name: name,
            price: price,
            category: category,
        }
        fetch("http://localhost:3000/Pizza",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(itemInfo)
        })
        .then((r)=> r.json())
        .then((newItem)=> console.log(newItem))
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
                <option value="classic">Classic</option>
                <option value="speciality">Speciality</option>
                <option value="sweet">Sweet</option>
            </select>

            <button type="submit"> Add to menu</button>

        </form>
    )
}
export default ItemForm