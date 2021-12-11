import { useEffect, useState } from 'react';
import CoffeeCard from '../components/CoffeeCard';
import './List.scss';

function List() {
    const [coffeeCards, setCoffeeCard] = useState([]); 
  
    useEffect(() => {
      fetch("http://localhost:3000/data/mockdata.json")
      .then((res) => res.json()) 
      .then((data) => {
        setCoffeeCard(data);       
      });
    }, []);

    return (
      <div className = "List">
        <header className = "main-header"> 
          <div className = "logo-wrapper">
            <span className = "main-logo">WeBucks</span> 
          </div> 
          <div className = "category-wrapper">
            <nav className = "category"> 
              <ul className = "category-list">
                <li><a className = "category-list-menu" href = "#">COFFEE</a></li>
                <li><a className = "category-list-menu" href = "#">MENU</a></li>
                <li><a className = "category-list-menu" href = "#">STORE</a></li>
                <li><a className = "category-list-menu" href = "#">WHAT'S NEW</a></li> 
              </ul> 
            </nav>
          </div>  
        </header> 
        <section className = "main-container01"> 
          <header className = "container-header">
            <div className = "header-title">
              콜드 브루 커피
              <div className = "icon-wrapper">
                <img className = "product-icon" src="/images/coffee-icon.png" alt="coffee icon"/>
              </div> 
            </div> 
            <div className = "header-desc">디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)</div> 
          </header>
          <article className = "list-container01"> 
            <ul className = "image-list">
              {coffeeCards[0] && coffeeCards[0].coldBrewCoffee.map((coffeeCard) => (
              <CoffeeCard coffee = {coffeeCard} coffeeKey = {coffeeCard.id} key = {coffeeCard.id} />
              ))}
            </ul>
          </article>
        </section> 
        <section className = "main-container02"> 
          <header className = "container-header"> 
            <div className = "header-title">
              브루드 커피
              <div className = "icon-wrapper">
                <img className = "product-icon" src= "/images/coffee-icon.png" alt="coffee icon"/>
              </div> 
            </div>
            <div className = "header-desc">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</div> 
          </header>
          <article className = "list-container02"> 
            <ul className = "image-list">
              {coffeeCards[1] && coffeeCards[1].brewedCoffee.map((coffeeCard) => (
              <CoffeeCard coffee = {coffeeCard} key={coffeeCard.id} />
              ))}
            </ul>
          </article>
        </section> 
      </div>
    );
}

export default List;