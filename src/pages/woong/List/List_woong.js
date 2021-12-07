import React from 'react';
import TopNav from '../components/TopNav';
import CoffeeCard from '../components/CoffeeCard';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { FaCoffee } from 'react-icons/fa';
import './List.scss';

function List() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/mockdata.json')
      .then(res => res.json())
      .then(data => {
        setCoffees(data);
      });
  }, []);

  return (
    <div className="List">
      <div className="container">
        <div>
          <TopNav />
        </div>
        <div>
          <div className="category">
            {/* 카테고리 타이틀 */}
            <span id="title1">콜드 브루 커피</span>
            <FaCoffee id="title2" />
            <span id="title3">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </div>
          <div className="itemList">
            {/* coffee 리스트 */}
            {coffees[0] &&
              coffees[0].coldBrewCoffee.map(coffee => (
                <CoffeeCard coffee={coffee} key={coffee.id} />
              ))}
          </div>
          <div className="category">
            {/* 카테고리 타이틀 */}
            <span id="title1">브루드 커피</span>
            <FaCoffee id="title2" />
            <span id="title3">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </div>
          <div className="itemList">
            {/* coffee 리스트 */}
            {coffees[1] &&
              coffees[1].brewedCoffee.map(coffee => (
                <CoffeeCard coffee={coffee} key={coffee.id} />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default List;
