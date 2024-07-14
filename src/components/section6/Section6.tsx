import "./index.css";

const Section6 = () => {
  return (
    <div className="section">
      <div className="section-wrapper">
        <div>
          <span className="title">풋살 이용시 환불규정</span>
        </div>
        <article>
          <div className="content">
            <div>
              <div>
                천재지변으로 인해 당일 이용이 불가능할 경우 100% 환불 됩니다.
                <br />
                이외 우천시 수중전 진행됩니다.
              </div>
              <div>
                구장대관은 차실 날짜 확정 하셔서 문의주시면 구장대관해드립니다.
                <br />
                구장 운영 불가할시 취소처리를 해야되므로 최소 21일전까지
                <br />
                말씀해주시면 감사드립니다.
              </div>
            </div>
          </div>
        </article>
        <footer
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "white",
            height: "32px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <div
            style={{
              flexDirection: "row-reverse",
              display: "flex",
              alignItems: "center",
            }}
          >
            © futsalmate - All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Section6;
