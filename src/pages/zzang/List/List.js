import React, {useEffect, useState, Link} from "react";
import './List.scss';
import TopNav from "../Nav/TopNav";
import Footer from "../Footer/Footer";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

function List() {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/data/mockdata.json")
        .then(res => res.json())
        .then(res => setData(res)) //데이터를 나타냄
        // []는 처음만 랜더링하고 이후에는 재랜더링 안되게끔 하기위해
    }, [])

    return(
        <div className="List_wrap">   
        <TopNav />   
            <div className="sub_title">
                <h3>음료</h3>
            </div>
            <div className="item_list_wrap">
                <dt>
                    <h4><a href="#">콜드 브루 커피</a></h4>
                    <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="40px" />
                    <span>디카페인 에스프레소 샷 추가 (일부 음료 제외)</span>
                </dt>

                {/* 콜드 브루 아이템 리스트 */}
                <div className="item_list">
                    <ul className="list">
                    {/* <Link to="/Detail"/> */}
                        {data.coldBrewCoffee&&
                        data.coldBrewCoffee.map( (e, i) =>  {
                            return <CoffeeCard key={i} item={e}/> 
                        })}
                    </ul>
                </div>

                <dt>
                    <h4><a href="#">브루드 커피</a></h4>
                    <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="40px" />
                    <span>디카페인 에스프레소 샷 추가 (일부 음료 제외)</span>
                </dt>

                {/* 브루드 아이템 리스트 */}
                    <ul className="list_2">
                        {data.brewedCoffee&&
                        data.brewedCoffee.map( (e, i) =>  {
                            return <CoffeeCard key={i} item={e}/> 
                        })}
                    </ul>
            </div>
            <Footer />
        </div> 
    )
}

export default List;