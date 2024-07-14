import "./index.css";

const Section5 = () => {
  return (
    <div className="section">
      <div className="section-wrapper">
        <div>
          <span className="title">이용금액</span>
        </div>
        <article>
          <div className="content">
            <div>
              <div>
                총인원은 18명입니다.
                <br />
                인원수에 따라 2파전 3파전 진행해드립니다. <br />
                팀끼리 오셨을경우 같은팀 넣어드리고
                <br /> 인원이 안맞을 경우 팀 섞어서 진행합니다
              </div>
              <div>이용금액은 1명당 1만원입니다</div>
              <div>계좌번호 : 기업은행 186-055-713-01-011 예금주:이성택</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Section5;
