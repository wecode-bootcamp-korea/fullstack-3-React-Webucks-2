import React from 'react';
import { Link } from 'react-router-dom';

function CoffeeCard({ coffee }) {
  return (
    <div className="CoffeeCard">
      <div className="item">
        <Link to="/woong/detail">
          <img alt={coffee.title} src={coffee.img} />
        </Link>
      </div>
      <div className="itemName">
        <Link to="/woong/detail">{coffee.title}</Link>
      </div>
    </div>
  );
}
export default CoffeeCard;
