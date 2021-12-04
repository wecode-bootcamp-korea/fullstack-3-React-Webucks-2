import React from 'react';
import './Detail.scss';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import TopNav from '../components/TopNav';
import { useState } from 'react';

function Detail() {
  const [state, setState] = useState();

  const clickLike = () => {
    setState(!state);
  };

  return (
    <div className="Detail">
      <div>
        <TopNav />
      </div>
      <header>
        <div className="categoryTitle">콜드 브루</div>
        <div className="categoryTrace">홈 > MENU > 음료 > 콜드브루 > 토피 넛 라떼</div>
      </header>
      <section>
        <aside>
          <img alt="토피 넛 라떼" src="../../public/images.details.jpeg" />
        </aside>
        <main>
          <section className="titleWrapper">
            <section className="nameWrapper">
              <p id="korName">토피 넛 콜드 브루</p>
              <p id="engName">Toffee Nut Cold Brew</p>
            </section>
            <section id="heartIcon">
              <div className="likeIcon" onClick={clickLike}>
                {state ? <FaHeart className="liked" /> : <FaRegHeart className="unliked" />}
              </div>
            </section>
          </section>
          <section className="coffeeDetail">
            <p>
              콜드 브루로 깔끔하게 즐기는 토피 넛 음료!
              <br />
              드디어 출시된 토피 넛 콜드 브루!
              <br />
              부드러운 토피 넛 폼과 어우러지는 콜드 브루의 깔끔함
            </p>
          </section>
          <section className="nutritionTitle">
            <div style={{ fontWeight: 700 }}>제품 영양 정보</div>
            <div>Tall(톨) / 355ml (12fl oz)</div>
          </section>
          <section className="nutritionDetail">
            <section className="nutritionWrapper" id="forCenterLine">
              <section className="nutrtionName">
                <p>1회 제공량(kcal)</p>
                <p>포화지방(g)</p>
                <p>단백질(g)</p>
              </section>
              <section className="nutritionNum">
                <p>195</p>
                <p>10</p>
                <p>1</p>
              </section>
            </section>
            <section className="nutritionWrapper">
              <section className="nutrtionName">
                <p>나트륨(mg)</p>
                <p>당류(g)</p>
                <p>카페인(mg)</p>
              </section>
              <section className="nutritionNum">
                <p>55</p>
                <p>18</p>
                <p>150</p>
              </section>
            </section>
          </section>
          <section>
            <div className="allregic">알레르기 유발 요인 : 우유</div>
          </section>
          <section className="review">
            <p className="reviewTitle">리뷰</p>
            <div className="reviewLog"></div>
            <input type="input" className="reviewInput" placeholder="리뷰를 입력해주세요" />
          </section>
        </main>
      </section>
      <footer>
        <ul>
          <li className="footerListTitle">COMPANY</li>
          <li>한눈에 보기</li>
          <li>스타벅스 사명</li>
          <li>스타벅스 소개</li>
          <li>국내 뉴스룸</li>
          <li>세계의 스타벅스</li>
          <li>글로벌 뉴스룸</li>
        </ul>
        <ul>
          <li className="footerListTitle">CORPORATE SALES</li>
          <li>단체 및 기업 구매 안내</li>
        </ul>
        <ul>
          <li className="footerListTitle">PARTNERSHIP</li>
          <li>신규 입점 제의</li>
          <li>협력 고객사 등록 신청</li>
        </ul>
        <ul>
          <li className="footerListTitle">ONLINE COMMUNITY</li>
          <li>페이스북</li>
          <li>트위터</li>
          <li>유튜브</li>
          <li>블로그</li>
          <li>인스타그램</li>
        </ul>
        <ul>
          <li className="footerListTitle">RECRUIT</li>
          <li>채용 소개</li>
          <li>채용 지원하기</li>
        </ul>
        <ul>
          <li className="footerListTitle">WEBUCKS</li>
        </ul>
      </footer>
    </div>
  );
}

export default Detail;
