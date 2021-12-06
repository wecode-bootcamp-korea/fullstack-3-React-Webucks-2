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
     {menuData.coldBrewCoffee && menuData.coldBrewCoffee.map((e, i) => {
            return <CoffeeCard key={i} item={e} />;
          })}
    </section>


      {/* <article className="img-container" id="first-img-container">
          <img className="coffee-image" src="../../images/coldbrew.jpeg" alt="coldbrew" />
          <h3>콜드 브루</h3>
      </article> */}

        {/* <article className="img-container">
            <img className="coffee-image" src="../../images/nitro_coldbrew.jpeg" alt="nitro coldbrew" />
          <h3>나이트로 콜드 브루</h3>
        </article>

        <article className="img-container">
            <img className="coffee-image" src="../../images/vanilla_coldbrew.jpeg" alt="vanilla coldbrew" />
          <h3>바닐라 콜드 브루</h3>
        </article>

        <article className="img-container">
            <img className="coffee-image" src="../../images/toffeenut_coldbrew.jpeg" alt="toffenut coldbrew" />
          <h3>토피넛 콜드 브루</h3>
        </article>

        <article className="img-container">
          <img className="coffee-image" src="../../images/dolce_coldbrew.jpeg" alt="dolce coldbrew" />
          <h3>돌체 콜드 브루</h3>
        </article>

        <article className="img-container">
          <img className="coffee-image" src="../../images/coldbrew_latte.jpeg" alt="coldbrew latte" />
          <h3>콜드 브루 라떼</h3>
        </article>

        <article className="img-container">
          <img className="coffee-image" src="../../images/coldbrew_oatmeal.jpeg" alt="coldbrew oatmeal" />
          <h3>콜드 브루 오트 라떼</h3>
        </article>

        <article className="img-container">
          <img className="coffee-image" src="../../images/coldbrew_molt.jpeg" alt="coldbrew molt" />
          <h3>콜드 브루 몰트</h3>
        </article>

        <article className="img-container">
            <img className="coffee-image" src="../../images/pumpkin_coldbrew.jpeg" alt="pumpkin coldbrew" />
          <h3>할로윈 콜드 브루</h3>
        </article>

        <article className="img-container">
            <img className="coffee-image" src="../../images/hazelnut_coldbrew.jpeg" alt="hazelnut coldbrew" />
          <h3>헤이즐넛 콜드 브루</h3>
        </article>

        <article className="img-container">
            <img className="coffee-image" src="#" alt="" />
        </article>

        <article className="img-container">
            <img className="coffee-image" src="#" alt="" />
        </article> */}

    {/* </section> */}

    {/* Brewed Coffee Title */}
    <section className="list-title">
      <h1>브루드 커피</h1>
        <FaCoffee className="coffee-icon" />
        <span className="title-description">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
    </section>

    {/* Brewed Coffee Lists */}
    <section className="brewed-coffee-container">
      {menuData.brewedCoffee && menuData.brewedCoffee.map((e, i) => {
      return <CoffeeCard key={i} item={e} />;
      })}
      
        {/* <article className="img-container" id="first-img-container">
          <img className="coffee-image" src="./images/iced_coffee.jpeg" alt="iced coffee" />
          <h3>아이스 커피</h3>
        </article>

        <article className="img-container">
          <img className="coffee-image" src="./images/today_coffee.jpeg" alt="specialty coffee" />
          <h3>스페셜티 커피</h3>
        </article>

        <article className="img-container">
          <img className="coffee-image" src="#" alt="" />
        </article>

        <article className="img-container">
          <img className="coffee-image" src="#" alt="" />
        </article> */}

    </section>
  </>
  )
}



export default List;