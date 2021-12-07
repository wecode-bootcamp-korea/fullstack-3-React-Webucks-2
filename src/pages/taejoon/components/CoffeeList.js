import React, { useState, useEffect } from "react";
import CoffeeCard from "./CoffeeCard";

function CoffeeList() {

    const [coffeeList, setcoffeeList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data/mockdata.json").then(res => res.json()).then(data => {setcoffeeList(data)});
    }, [])
    console.log(`####HERE: ${coffeeList}`)

    return (coffeeList.map(coffeeData => {
        <CoffeeCard
            src={coffeeData.coldBrewCoffee}
        />

    })
    )

}
export default CoffeeList;