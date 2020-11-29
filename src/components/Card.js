import React from "react";

const Card = ({ data }) => {
  return (
    <div className="main-container">
      <div className="data-div">
        {data.map((item) => (
          <div className="product-div" key={item.id}>
            <h4> {item.name}</h4>
            <p> Manufacturer: {item.manufacturer}</p>
            <p> Price: ${item.price}</p>
            <p> Type: {item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
