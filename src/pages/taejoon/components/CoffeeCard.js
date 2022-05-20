import React from 'react'

function CoffeeCard(props){
    return(
        <li className="coffeeImgLi">
            <img className="pngImg"
            src={props.data.img} alt = {props.data.title}/>
        </li>
    )

}

export default CoffeeCard;
