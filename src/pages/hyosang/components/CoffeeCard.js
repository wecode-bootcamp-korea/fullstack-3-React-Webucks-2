import React, { useEffect, useState } from 'react' 

// useEffect(() => {
//   fetch("http://localhost:3000/data/mockdata.json")
//   .then((res) => res.json()) 
//   .then((data) => {
//     setCoffeeCard(data);       
//   });
// }, []);

function CoffeeCard(props) { 
    const [detailSrc, setDetailSrc] = useState('#'); 

    useEffect(() => {
      if (props.coffeeKey === 7) {
          setDetailSrc('/hyosang/detail'); 
      }
    }); 
    
    return(
          <li>
            <div className = "image-wrapper">
              <a href = {detailSrc}><img src= { props.coffee.img } alt="Img" /></a>
            </div>
            <div className = "image-title">{ props.coffee.title }</div>
          </li>
    );
  } 

  export default CoffeeCard;