import React from "react";

function Filter({category, onCategoryChange}){
    return (
        <div className="Filter">
        <label htmlFor ="menu">Choose a Dish </label>
        <select name="filter" value={category} onChange={(e)=> onCategoryChange(e.target.value)}>
            <option value= "All">Filter by category</option>
            <option value ="Pizza">Pizza</option>
            <option value="Quesadillas">Quesadillas</option>
            <option value= "Tortas">Tortas</option>
        </select>
        </div>
    )
}

export default Filter