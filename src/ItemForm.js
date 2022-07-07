import React, { useState } from "react";
import Form from "./Form";

function ItemForm({onAddItem}){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Product")

    function handleSubmit(e){
        e.preventDefault()
        const itemInfo ={
            name: name,
            description: description,
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
        .then((newItem)=> onAddItem(newItem))
    }
    return (
        <>
            <Form
            handleSubmit={handleSubmit}
            name={name}
            description={description}
            price={price}
            category={category}
            setName={setName}
            setDescription={setDescription}
            setPrice={setPrice}
            setCategory={setCategory}
            />
         </>
        
    )
}
export default ItemForm