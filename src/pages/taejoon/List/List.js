import "./List.scss";
import TopNav from "../components/TopNav";
import React, { useEffect, useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
// import API_HOST from "../api"

function List() {
  //coffee List state 선언
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/mockdata.json")
      .then((res) => res.json())
      .then((data) => setCoffeeList(data));
  }, []);

  return (
    <>
      <TopNav />
      <div className="coffeeType">
        <span className="coffeeTypeSpan">콜드 브루 커피</span>
        <i id="coffee_icon" className="fas fa-coffee"></i>
        <span className="summary">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </span>
      </div>
      <div className="coffeeImgDiv">
        <ul className="coffeeImgUl">
          {/* (뒤조건 실행범위) && (실행할 함수)) */}
          {coffeeList[0] &&
            coffeeList[0].coldBrewCoffee.map((coffeeList) => (
              <CoffeeCard data={coffeeList} key={coffeeList.id} />
            ))}
        </ul>
      </div>
      <div className="coffeeType">
        <span className="coffeeTypeSpan">브루드 커피</span>
        <i id="coffee_icon" className="fas fa-coffee"></i>
        <span className="summary">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </span>
      </div>
      <div className="coffeeImgDiv">
        <ul className="coffeeImgUl">
          {coffeeList[1] &&
            coffeeList[1].brewedCoffee.map((coffeeList) => (
              <CoffeeCard data={coffeeList} key={coffeeList.id} />
            ))}
        </ul>
      </div>
    </>
  );
}

export default List;
