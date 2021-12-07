

function CoffeeCard(props){
    console.log(`###HERE CARD : ${props}`)
    return(
        <li className="coffeeImgLi">
            <img className="pngImg"
            src={props}/>
        </li>
    )

}

export default CoffeeCard;
