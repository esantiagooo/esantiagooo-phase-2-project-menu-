import React from "react";

function Form({
    handleSubmit,
    name,
    description,
    price,
    category,
    setName,
    setDescription,
    setPrice,
    setCategory
}){
    return (
        <form   className="NewItem" onSubmit={handleSubmit}>  
             <div>
            <label className="item-form" htmlFor="items name">Item's name: </label>
            <input type="text" name ="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div>
            <label className="item-form" htmlFor="items description"> Description:</label>
            <input  type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} ></input>
            </div>
            <div>
            <div>
            <label className="item-form" htmlFor="items price" > price: </label>
            <input  type="text" name="price"  value={price} onChange={(e)=>setPrice(e.target.value)} ></input>
            </div>    
            <label className="item-form" htmlFor="items name">Category:</label>
             <select name ="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Produce">Add by category</option>
                <option value="classic">Classic</option>
                <option value="speciality">Speciality</option>
                <option value="sweet">Sweet</option>
            </select>

            <button type="submit"> Add to menu</button>
            </div> 
        </form>
    )
}
export default Form