import { Images } from "../../assets";
import "./index.css";

const Section1 = () => {
  return (
    <div className="section">
      <div className="section-wrapper">
        <header className="header">Futsal Mate</header>
        <article>
          <div className="content">
            <div style={{ width: "100%" }}>
              <div
                style={{
                  fontSize: "64px",
                  lineHeight: "72px",
                  fontWeight: "bold",
                }}
              >
                Ready to make <br /> some noise?
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  marginTop: "56px",
                  flexDirection: "row-reverse",
                }}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.ton_keeper"
                  target="_blank"
                >
                  <img src={Images.google} alt="" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ton_keeper"
                  target="_blank"
                >
                  <img src={Images.apple} alt="" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Section1;
