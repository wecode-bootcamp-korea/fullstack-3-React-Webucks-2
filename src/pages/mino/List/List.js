import React, { useState, useEffect } from "react";
import "../../../styles/reset.scss";
import "./List.scss";
import TopNav from "../TopNav";
import {FaCoffee} from "react-icons/fa";
import CoffeeCard from "./CoffeeCard"



function List() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/mockdata.json')
    .then((res)=>res.json())
    .then((res) => setMenuData(res));
  }, []);

  return (
    <>
    {/* Navbar */}
    <TopNav />

    {/* Cold Brew Coffee Title */}
    <section className="list-title">
      <h1>콜드 브루 커피</h1>
        <FaCoffee className="coffee-icon" />
        <span className="title-description">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
      </section>


    {/* Cold Brew Coffee Lists */}
    <section className="cold-brew-coffee-container">
     {menuData[0] && menuData[0].coldBrewCoffee.map((e, i) => {
            return <CoffeeCard key={i} item={e} />;
          })}
    </section>

    {/* Brewed Coffee Title */}
    <section className="list-title">
      <h1>브루드 커피</h1>
        <FaCoffee className="coffee-icon" />
        <span className="title-description">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
    </section>

    {/* Brewed Coffee Lists */}
    <section className="brewed-coffee-container">
      {menuData[1] && menuData[1].brewedCoffee.map((e, i) => {
      return <CoffeeCard key={i} item={e} />;
      })}
    </section>
  </>
  )
}



export default List;