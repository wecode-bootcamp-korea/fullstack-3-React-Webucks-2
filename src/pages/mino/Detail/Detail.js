import React, { useState, useEffect } from "react";
import "../../../styles/reset.scss";
import "./Detail.scss";
import TopNav from "../TopNav";
import Footer from "../Footer";
import {FaRegHeart} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import Comment from "./Comment";


function Detail() {

  const [like, setLike] = useState(false);

  const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/data/comment_mino.json')
    .then((res)=>res.json())
    .then((res) => { setCommentsData(res);
    });
  }, []);

  const [addComment, setAddComment] = useState([]);

  const submitComment = (e) => {
    if (e.keyCode === 13 && e.target.value.length !== 0) {
      let add = [...addComment];
      add.push(e.target.value);
      setAddComment(add);
      e.target.value = "";
    }
  };

  return (
    <>
    <TopNav />

    {/* Title and Location */}
    <section className="title-location-container">
      {/* Title */}
      <h1 className="detail-title">콜드 브루</h1>
      {/* Location */}
      <div className="location">
        홈 > MENU > 음료 > 에스프레소 > 화이트 초콜릿 모카
      </div>
    </section>


      {/* Image, Information & Review */}
      <section className="img-and-info-container">
        {/* Image */}
        <article>
          <img className="detail-image" src="../../images/details.jpeg" alt="White Chocolate Mocha" />
        </article>

        {/* Information & Review */}
        <div className="info-and-review-container">

          {/* Information - Title */}
          <article className="info-title">
            <h2 className="info-name">
              화이트 초콜릿 모카
              <p className="info-title-eng-name">White Chocolate Mocha</p>
            </h2>
            <div className='heart-icon' onClick={() => setLike((prevLike) => !prevLike)} >
              { like ? <FaHeart style={{ color: 'red' }} />  : <FaRegHeart style={{ color: 'gainsboro'}} /> }
            </div>
          </article>

          {/* Information - Description */}
          <article className="info-description">
            달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
              섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
              부드럽게 어우러진 커피
          </article>

          {/* Information - Nutrition Title */}
          <article className="nut-title">
            <h2>제품 영양 정보</h2>
            <p>Tall(톨) / 355ml (12 fl oz)</p>
          </article>

          {/* Information - Nutrition Information */}
          <div className="nut-section">
            <article className="nut-container">
              <div>
                <p className="nut-name">1회 제공량 (kcal)</p>
                <p className="nut-name">포화지방 (g)</p>
                <p className="nut-name">단백질 (g)</p>
              </div>
              <div className="nut-volume" id="dot-line">
                <p className="nut-name">345</p>
                <p className="nut-name">11</p>
                <p className="nut-name">11</p>
              </div>
            </article>
            <article className="nut-container">
              <div className="nut3">
                <p className="nut-name">나트륨 (mg)</p>
                <p className="nut-name">당류 (g)</p>
                <p className="nut-name">카페인 (mg)</p>
              </div>
              <div className="nut-volume">
                <p className="nut-name">150</p>
                <p className="nut-name">35</p>
                <p className="nut-name">75</p>
              </div>
            </article>
          </div>

          {/* Information - Allergy */}
          <article className="allergy">알레르기 유발요인 : 우유</article>

          {/* Review*/}
          {/* Review Title */}
          <h2 className="review-title">리뷰</h2>
          {/* Review Container */}
          <section className="review-container">
            {commentsData.map((commentData, index) => {
              return  <Comment 
                        key={index}
                        text={commentData.text} 
                        userId={commentData.userId} />;
            })}

            {addComment.map((e, i) => {
              return (
                <Comment key={i} text={e} index={i} addComment={addComment} setAddComment={setAddComment} />);
            })}

            <input
              type="text"
              className="review-input"
              placeholder="리뷰를 입력해주세요."
              onKeyDown={(e) => { submitComment(e); }}
            />
          </section>
        </div>
      </section>
    <Footer />
    </>
  )
}


export default Detail