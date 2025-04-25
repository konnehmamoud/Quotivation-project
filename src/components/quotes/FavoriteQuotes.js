 import React from "react"
 import FavoriteQuoteCard from "../FavoriteQuoteCard";
 
 const FavoriteQuotes = ({favoriteQuotes,maxFaves,removeFromFavorites})=>{

  const remainingQuotes = maxFaves- favoriteQuotes.length
 return(
<section className="favorite-quotes">
        <div className="wrapper-quotes">
         <h3> Top 3 favorite quotes</h3>
         {favoriteQuotes.length >= 1 && 
          <ul>
            {favoriteQuotes.map((quote, index) => (
              <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites}
              listPosition={index + 1}
              />
            ))}
          </ul>
        }
        {favoriteQuotes.length < maxFaves &&
        <div className="favorite-quotes-description">
        <p> You can add {remainingQuotes} more {remainingQuotes === 1 ? "quote" : "quotes"} by selecting from the options below</p>
      </div>
        }
        
          </div>     
          </section>
 )
 }
 export default FavoriteQuotes;


 