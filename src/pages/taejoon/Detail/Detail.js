import react from "react";
import "./Detail.css";
import TopNav from "../components/TopNav";

function Detail() {

    return (
        <>
            <TopNav />
            <div className="coffee_category">
                <div className="coldBrew">
                    콜드 브루
                </div>
                <div className="route">
                    {'홈 > MENU > 음료 > 에스프레소 > 화이트 초콜릿 모카'}
                </div>
            </div>
            <div className="imgAndInfo">
                <div className="coffee_img">
                    <img src="/images/coffee1.png" alt="" />
                </div>
                <div className="coffee_info">
                    <div className="nameAndLike">
                        <div className="coffee_name">
                            <h2>화이트 초콜릿 모카</h2>
                            white Chocolate Mocha
                        </div>
                        <div className="heart_icon">
                            하트뿅
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                울랄라울랄라
            </div>
        </>
    );
}

export default Detail;
