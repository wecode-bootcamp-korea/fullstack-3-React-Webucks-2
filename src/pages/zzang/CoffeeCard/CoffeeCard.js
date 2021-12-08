/*eslint-disable*/

import '../List/List.scss';

function CoffeeCard(props){
    return(
        <>
        <li>
            <div className="item">
                    <a href="#">
                        <img src={props.item.img} alt={props.item.title} width="250px" height="300px"/>
                    </a>
            </div>
            <p>{props.item.title}</p>
        </li>
        </>
    )
}

export default CoffeeCard;