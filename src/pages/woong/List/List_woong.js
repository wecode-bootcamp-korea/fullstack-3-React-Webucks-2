import React from 'react';
import './List.scss';
import TopNav from '../components/TopNav';
import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function List() {
  return (
    <div className="List">
      <div className="container">
        <div>
          <TopNav />
        </div>
        <div>
          <div className="category">
            <span id="title1">콜드 브루 커피</span>
            {/* <FontAwesomeIcon icon={faCoffee} className="coffeeIcon" id="title2" /> */}
            <span id="title3">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </div>
          <div className="itemList">
            <div>
              <Link to="/woong/detail">
                <div className="item">
                  <img alt="토피 넛 콜드 브루" src="/images/coffee1.jpg" id="toffeePic" />
                </div>
              </Link>
              <div>
                <p className="itemName">
                  <Link to="/list/detail" id="toffeeName">
                    토피 넛 콜드 브루
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="나이트로 바닐라 크림" src="/images/coffee2.jpg" />
              </div>
              <div>
                <p className="itemName">나이트로 바닐라 크림</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="나이트로 콜드 브루" src="/images/coffee3.jpg" />
              </div>
              <div>
                <p className="itemName">나이트로 콜드 브루</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="돌체 콜드 브루" src="/images/coffee4.jpg" />
              </div>
              <div>
                <p className="itemName">돌체 콜드 브루</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="바닐라 크림 콜드 브루" src="/images/coffee4.jpg" />
              </div>
              <div>
                <p className="itemName">바닐라 크림 콜드 브루</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="벨벳 다크 모카 나이트로" src="/images/coffee3.jpg" />
              </div>
              <div>
                <p className="itemName">벨벳 다크 모카 나이트로</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="시그니처 더 블랙 콜드 브루" src="/images/coffee2.jpg" />
              </div>
              <div>
                <p className="itemName">시그니처 더 블랙 콜드 브루</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="제주 비자림 콜드 브루" src="/images/coffee1.jpg" />
              </div>
              <div>
                <p className="itemName">제주 비자림 콜드 브루</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="콜드 브루" src="/images/coffee2.jpg" />
              </div>
              <div>
                <p className="itemName">콜드 브루</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="콜드 브루 몰트" src="/images/coffee4.jpg" />
              </div>
              <div>
                <p className="itemName">콜드 브루 몰트</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="콜드 브루 플로트" src="/images/coffee1.jpg" />
              </div>
              <div>
                <p className="itemName">콜드 브루 플로트</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="콜드 브루 오트 라떼" src="/images/coffee3.jpg" />
              </div>
              <div>
                <p className="itemName">콜드 브루 오트 라떼</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="프렌치 애플 타르트 나이트로" src="/images/coffee1.jpg" />
              </div>
              <div>
                <p className="itemName">프렌치 애플 타르트 나이트로</p>
              </div>
            </div>
          </div>
          <div className="category">
            <span id="title1">브루드 커피</span>
            {/* <FontAwesomeIcon icon={faCoffee} className="coffeeIcon" id="title2" /> */}
            <span id="title3">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </div>
          <div className="itemList">
            <div>
              <div className="item">
                <img alt="아이스 커피" src="/images/coffee4.jpg" />
              </div>
              <div>
                <p className="itemName">아이스 커피</p>
              </div>
            </div>
            <div>
              <div className="item">
                <img alt="오늘의 커피" src="/images/coffee2.jpg" />
              </div>
              <div>
                <p className="itemName">오늘의 커피</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
