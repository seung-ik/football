import { Images } from "../../assets";
import "./index.css";

const Section4 = () => {
  return (
    <div className="section">
      <div className="section-wrapper">
        <div>
          <span className="title">구장안내도</span>
        </div>
        <article>
          <div className="content">
            <div>
              <div>
                용산아이파크몰 아디다스 더베이스 1,3구장 대​관​요금 115,000원
              </div>
              <div>구장크기​ : 40M * 20M</div>
              <div>
                최대 인원 18명
                <br /> 야외 인조잔디
                <br /> 5 vs 5 , 6 vs 6 가능
                <br /> 엘레베이터를 2번 타야됩니다.
                <br /> 구장 이용시 비번 공지드림.
              </div>
            </div>
            <img className="field-img" src={Images.field} alt="" />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Section4;
