import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

function Quotes({ filteredQuotes, category, categories, handleCategoryChange,addToFavorites, favoriteQuotes,removeFromFavorites }) {
  return (
    <section className='all-quotes'>
      <div className='quotes wrapper'>
        <div className='category-header'>
        <h2 className="category-header"> Pick Our Favorite Quotes</h2>  
          <p> You have {filteredQuotes.length} {category !== "All" && category} {filteredQuotes.length === 1 ? "quotes" : "quotes"}</p>
          <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange} />
        </div>

        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes}
          removeFromFavorites={removeFromFavorites} />
        ))}
      </div>
    </section>
  );
}

export default Quotes;