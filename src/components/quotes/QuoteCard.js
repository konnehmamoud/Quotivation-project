import React from "react";
import {Heart} from "react-feather"

function QuoteCard({ quote, addToFavorites, favoriteQuotes, removeFromFavorites  }) {
 const alreadyFavorite = favoriteQuotes.find((favorite) => favorite.id ===quote.id)
 const faveStyle = alreadyFavorite? "#ff0000" : ""
 
 const handleDoubleClick= ()=>{
if(alreadyFavorite){
  removeFromFavorites(quote.id)
}
 }
  
 return (
    <article className="quote-card">
      <div>
        <p className="categories">
          {quote.categories.map(category =>(
            <span className="category" key={category}>{category}</span>
          ))}
        </p>
        <h3>{quote.text}</h3>
      </div>
      <footer>
        <p className="author">{quote.author}</p>
        <p className="add-favorite" onClick={()=>addToFavorites(quote.id)}
        onDoubleClick={handleDoubleClick}>
          <Heart style={{fill: faveStyle}}/>
        </p>
      </footer> 
    </article>
  )
}

export default QuoteCard;