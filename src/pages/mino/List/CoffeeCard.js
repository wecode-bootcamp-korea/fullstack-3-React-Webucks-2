import React, { useState } from "react";
import {FaRegHeart} from "react-icons/fa";

export default function CoffeeCard (props) {
  return (
    <article className="img-container">
      <img className="coffee-image" src={props.item.img} alt={props.item.title} />
      <h3>{props.item.title} <FaRegHeart/></h3>
    </article>
  );
}
