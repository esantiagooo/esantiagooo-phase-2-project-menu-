import React from "react";

function Filter({category, onCategoryChange}){
    return (
        <div className="Filter">
        <label htmlFor ="menu">Choose a Dish </label>
        <select name="filter" value={category} onChange={(e)=> onCategoryChange(e.target.value)}>
            <option value= "All">Filter by category</option>
            <option value ="classic">Classic</option>
            <option value="speciality">Speciality</option>
            <option value= "sweet">Sweet</option>
        </select>
        </div>
    )
}

export default Filter