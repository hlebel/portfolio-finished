import React from "react";

const Cards = ({ title, description, timeline }) => (
  <div className="cards">
    <h2 className="cards__title">{title}</h2>
    <p className="cards__description">{description}</p>
    <p className="cards__timeline">{timeline}</p>
  </div>
);

export default Cards;
