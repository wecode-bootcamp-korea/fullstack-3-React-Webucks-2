import React, { useState, useEffect } from "react";

function CoffeeList() {

    const [coffeeList, setcoffeeList] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/data/mockdata.json")
            .then(res => res.json())
            .then(data => {
                setcoffeeList(data);
                console.log(`####HERE IS DATA : ${data}`);
            });
    }, [])

    return (
        coffeeList.map(coffeeImg => {
            return(
                <li src={coffeeImg} ></li>
            )
        })
    )


}
export default CoffeeList;