import React from "react"
import { Filter } from "react-feather"

const CategoryForm = ({categories, category, handleCategoryChange})=>{

    return(
        <div className='category-form'>
        <form className='category-filter'>
            <Filter/>
           <label htmlFor='category'>Filter Quotes:</label>
           <select id='category' name='category' value ={category} onChange={handleCategoryChange}>
            {categories.map(category =>(
            <option key={category} value={category} >
                {category}</option> 
            ))}
           </select>
        </form>
      </div>  
    )
}

export default CategoryForm