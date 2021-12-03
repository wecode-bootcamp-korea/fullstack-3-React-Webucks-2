import React from 'react';
import { useState, useEffect } from 'react';

function CoffeeCard() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/mockdata.json')
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <>
      리스트 테스트
      {coffees.map((coffee) => {
        return <coldBrewCoffee name={coffee.title} img={coffee.img} />;
      })}
    </>
  );
}

export default CoffeeCard;
