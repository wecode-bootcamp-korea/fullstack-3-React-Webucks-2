import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import DetailCard from './DetailCard';
import './Detail.scss';

function Detail() {
  const [coffeeDetail, setCoffeeDetail] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/CoffeeDetail.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeDetail(data);
      });
  }, []);

  return (
    <div className="Detail">
      <div>
        <TopNav />
      </div>
      {coffeeDetail.CoffeeDetail &&
        coffeeDetail.CoffeeDetail.map((element, i) => (
          <DetailCard element={element} key={i} />
        ))}
      <Footer />
    </div>
  );
}

export default Detail;
