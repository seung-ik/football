import { Images } from "../../assets";
import "./index.css";

const Section2 = () => {
  return (
    <div className="section">
      <div className="section-wrapper">
        <div>
          <span className="title">예약 서비스</span>
        </div>
        <article>
          <div className="content">
            <div className="img-wrapper">
              <div className="box">
                <img src={Images.ground} alt="" />
                <span>대관 예약</span>
              </div>
              <div className="box">
                <img src={Images.referee} alt="" />
                <span>조끼, 공 대여 심판진행</span>
              </div>
              <div className="box">
                <img src={Images.water} alt="" />
                <span>물 지급</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Section2;
