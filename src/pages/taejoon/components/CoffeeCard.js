import React from 'react'

function CoffeeCard(props){
    console.log(`###HERE CARD : ${props}`)
    return(
        <li className="coffeeImgLi">
            <img className="pngImg"
            src={props.data.img} alt = {props.data.title}/>
        </li>
    )

}

export default CoffeeCard;
