import "./SearchItem.css";

function SearchItem() {
   return (
      <div className="searchItem">
         <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt=""
            className="searchImg"
         />
         <div className="searchDesc">
            <h1 className="title">Tower Street Apartments</h1>
            <small className="distance">500m from center</small>
            <p className="taxiOp">Free airport taxi</p>
            <p className="subtitle">Studio Apartment with Air conditioning</p>
            <p className="features">
               Entire studio • 1 bathroom • 21m² 1 full bed
            </p>
            <p className="cancelOp">Free cancellation</p>
            <p className="cancelOpSubtitle">
               You can cancel later, so lock in this great price today!
            </p>
         </div>
         <div className="searchDetails">
            <div className="rating">
               <span>Excellent</span>
               <button>8.9</button>
            </div>
            <div className="detailTexts">
               <p className="price">$112</p>
               <p className="taxOp">Includes taxes and fees</p>
               <button className="checkButton">See availability</button>
            </div>
         </div>
      </div>
   );
}

export default SearchItem;
