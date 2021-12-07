import React from 'react';

function CoffeeCard(props){
    return(
        <>
        <li>
            <div className="item">
                    <a href="#">
                        <img src={props.item.img} alt={props.item.title} width="250px" height="300px"/>
                    </a>
                </div>
            <dd>{props.item.title}</dd>
        </li>
        </>
    )
}

export default CoffeeCard;