import React, { useState } from 'react';
import Comment from './Comment';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

function DetailCard({ element, i }) {
  const [state, setState] = useState();
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const clickLike = () => {
    setState(!state);
  };

  const saveComment = e => {
    setComment(e.target.value);
  };

  const submitComment = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(commentValueList => [comment, ...commentValueList]);
    setComment('');
  };

  return (
    <div className="DetailCard" key={i}>
      <header>
        <div className="categoryTitle">{element.categoryName}</div>
        <div className="categoryTrace">
          {element.traceCategory1} {'>'} {element.traceCategory2} {'>'}{' '}
          {element.traceCategory3} {'>'} {element.categoryName} {'>'}{' '}
          {element.coffeeKorName}
        </div>
      </header>
      <section>
        <aside>
          <img alt={element.coffeeKorName} src={element.coffeeImg} />
        </aside>
        <main>
          <section className="titleWrapper">
            <section className="nameWrapper">
              <p id="korName">{element.coffeeKorName}</p>
              <p id="engName">{element.coffeeEngName}</p>
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
            <p>{element.coffeeDetailRow1}</p>
            <p>{element.coffeeDetailRow2}</p>
            <p>{element.coffeeDetailRow3}</p>
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
                <p>{element.제공량}</p>
                <p>{element.포화지방}</p>
                <p>{element.단백질}</p>
              </section>
            </section>
            <section className="nutritionWrapper">
              <section className="nutrtionName">
                <p>나트륨(mg)</p>
                <p>당류(g)</p>
                <p>카페인(mg)</p>
              </section>
              <section className="nutritionNum">
                <p>{element.나트륨}</p>
                <p>{element.당류}</p>
                <p>{element.카페인}</p>
              </section>
            </section>
          </section>
          <section>
            <div className="allregic">
              알레르기 유발 요인 : {element.causeAllregic}
            </div>
          </section>
          <div onSubmit={submitComment}>
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
    </div>
  );
}

export default DetailCard;
