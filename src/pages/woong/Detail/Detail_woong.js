import React from 'react';
import './Detail.scss';
import TopNav from '../components/TopNav';
import Comment from './Comment';
import Footer from '../components/Footer';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

function Detail() {
  const [state, setState] = useState();
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const clickLike = () => {
    setState(!state);
  };

  const saveComment = e => {
    setComment(e.target.value);
  };

  const submitCommnet = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(commentValueList => [comment, ...commentValueList]);
    setComment('');
  };

  return (
    <div className="Detail">
      <div>
        <TopNav />
      </div>
      <header>
        <div className="categoryTitle">콜드 브루</div>
        <div className="categoryTrace">
          홈 {'>'} MENU {'>'} 음료 {'>'} 콜드브루 {'>'} 토피 넛 라떼
        </div>
      </header>
      <section>
        <aside>
          <img
            alt="토피 넛 라떼"
            src={process.env.PUBLIC_URL + '/images/french.jpg'}
          />
        </aside>
        <main>
          <section className="titleWrapper">
            <section className="nameWrapper">
              <p id="korName">토피 넛 콜드 브루</p>
              <p id="engName">Toffee Nut Cold Brew</p>
            </section>
            <section id="heartIcon">
              <div className="likeIcon" onClick={clickLike}>
                {state ? (
                  <FaHeart className="liked" />
                ) : (
                  <FaRegHeart className="unliked" />
                )}
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
          <div onSubmit={submitCommnet}>
            <form className="review">
              <p className="reviewTitle">리뷰</p>
              <Comment commentArray={commentArray} />
              <input
                type="input"
                className="reviewInput"
                placeholder="리뷰를 입력해주세요"
                value={comment}
                onChange={saveComment}
              />
            </form>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}

export default Detail;