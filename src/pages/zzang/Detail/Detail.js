import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import './Detail.scss'
import TopNav from "../Nav/TopNav";
import Footer from "../Footer/Footer";
import Comment from "../Comment/Comment";

function Detail() {

    const [likeClick, setLikeClick] = useState(false);
    const [comment, setcommentData] = useState([]);
    console.log(comment)

    useEffect(() => {
        fetch("http://localhost:3000/data/commentdata.json")
        .then(res => res.json())
        .then(res => setcommentData(res)) //데이터를 나타냄
        // []는 처음만 랜더링하고 이후에는 재랜더링 안되게끔 하기위해
    }, [])

    const [inputText, setinputText] = useState([]);

    const pressEnterEvent = (e) => {
        if (e.keyCode === 13 && e.target.value.length !== 0) {
        let copy = [...inputText];
        copy.push(e.target.value);
        setinputText(copy);
        e.target.value = "";
        }
    };

    return(
        <div className="detail_wrap">
            <TopNav />
            <div className="sub_title">
                <h1>콜드 브루</h1>
                <h4>홈 &gt; MENU &gt; 음료 &gt; 콜드브루</h4>
            </div>

            <div className="detail_container">
                <div className="detail_pic">
                    <img src="../images/coldbrew.jpeg" alt="콜드브루" width="550px" height="650px"/>
                </div>

                <div className="detail_info">
                    <div className="detail_info_name">
                        <div className="detail_info_product_name">
                            <p>콜드브루</p>
                            <p>Cold Brew Coffee</p>
                        </div>
                        <div className="heart">
                            <i 
                            className={likeClick === true ? "fas fa-heart rheart" : "far fa-heart"} 
                            onClick={() => setLikeClick(!likeClick)}
                            />
                        </div>
                    </div>
                    <div className="detail_info_expain">
                        <span />
                            스타벅스 바리스타의 정성으로 탄생한 콜드 브루!
                            <br/>
                            콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 한정된 양만 제공됩니다.
                            <br/>
                            깊은 풍미의 새로운 커피 경험을 즐겨보세요.
                        <span/>
                    </div>
                    <div className="detail_info_nutrition">
                        <p id="nutrition1">제품 영양 정보</p>
                        <p id="nutrition2">Tall(톨) / 355ml (12 fl oz)</p>
                    </div>

                    <div className="detail_info_kcal">
                        <div className="kcal">
                            <p>1회 제공량 (kcal)</p>
                            <span>345</span>
                        </div>
                        <div className="kcal">
                            <p>나트륨 (mg)</p>
                            <span>11</span>
                        </div>
                        <div className="kcal">
                            <p>포화지방 (g)</p>
                            <span>0</span>
                        </div>
                        <div className="kcal">
                            <p>당류 (g))</p>
                            <span>0</span>
                        </div>
                        <div className="kcal">
                            <p>단백질 (g)</p>
                            <span>0</span>
                        </div>
                        <div className="kcal">
                            <p>카페인 (mg)</p>
                            <span>150</span>
                        </div>
                    </div>

                    <div className="allergy">
                        <span>알러지 유발 요인 : 우유</span>
                    </div>

                    <div className="review">
                        <h1>리뷰</h1>
                    </div>
                    <div className="Comment_wrap">
                        {comment && comment.map((commentdata, index) => {
                            return <Comment
                                key={index}
                                text={commentdata.text}
                                user={commentdata.user} />;
                        })}

                        {inputText.map((e, i) => {
                            return (
                            <Comment
                                key={i} text={e} index={i}
                                inputText={inputText}
                                setinputText={setinputText} />);
                        })}
                    </div>
                        <input 
                            type="text" 
                            placeholder="리뷰를 입력해주세요" 
                            className="review_input"
                            onKeyDown={(e) => { pressEnterEvent(e); }} 
                            />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Detail;