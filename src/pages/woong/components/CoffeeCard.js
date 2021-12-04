import React from 'react';
import { Link } from 'react-router-dom';

function CoffeeCard(props) {
  return (
    <div>
      <Link to="/woong/detail">
        <div className="item">
          <img alt={props.coffee.title} src={props.coffee.img} id="toffeePic" />
        </div>
      </Link>
      <div className="itemName">
        <Link to="/woong/detail" id="toffeeName">
          {props.coffee.title}
        </Link>
      </div>
    </div>
  );
}
export default CoffeeCard;
