import React from "react";
import "./Card.css";

const Card = ({ tour, handleDeleteCard }) => {
  return (
    <div className="cardC">
      <div className="imageC">
        <img src={tour?.imageCover} alt="tour1" />
      </div>
      <div className="details">
        <div className="country">{tour?.locationName}</div>
        <div className="dates">{tour?.duration} days</div>
        <div className="price">
          {tour?.price}
          {tour?.currency}
        </div>
      </div>
      <div className="bookingC">
        <div className="Book_button">
          <button onClick={handleDeleteCard}>del</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
