import "./List.scss";
import TopNav from "../components/TopNav";

function List() {
    return (
        <>
            <TopNav />
            <div className="coffeeType">
                <span className="coffeeTypeSpan">콜드 브루 커피</span>
                <i id="coffee_icon" className="fas fa-coffee"></i>
                <span className="summary">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </div>
            <div className="coffeeImgDiv">
                <ul className="coffeeImgUl">
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee1.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee2.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee3.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee4.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee5.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee6.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee7.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee8.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee9.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee10.png" alt="" />
                    </li>

                </ul>
            </div>
            <div className="coffeeType">
                <span className="coffeeTypeSpan">브루드 커피</span>
                <i id="coffee_icon" className="fas fa-coffee"></i>
                <span className="summary">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </div>
            <div className="coffeeImgDiv">
                <ul className="coffeeImgUl">
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee1.png" alt="" />
                    </li>
                    <li className="coffeeImgLi">
                        <img className="pngImg" src="/images/coffee2.png" alt="" />
                    </li>
                </ul>
            </div>
    
        </>
    );
}

export default List;