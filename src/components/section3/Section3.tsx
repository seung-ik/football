import "./index.css";

const Section3 = () => {
  return (
    <div className="section">
      <div className="section-wrapper">
        <div>
          <span className="title">풋살 이용수칙</span>
        </div>
        <article>
          <div className="content">
            <ul>
              <li>
                1.키퍼는 골넣거나 먹혔을때 교체되는것이 아닌 중간시간 마다 해당{" "}
                <i>번호</i>에 따라 호명해드리며 교체합니다.
              </li>
              <li>
                2. 천장맞거나 사이드 나갈시 <i>2M</i> 떨어져서 플레이합니다.
              </li>

              <li>
                3.<i>비방</i>이나 과한 <i>욕설</i> 금지합니다. 과한플레이{" "}
                <i>금지</i>
                합니다.
              </li>

              <li>
                3. 팀끼리 오셨어도 밸런스가 안맞을경우 <i>팀교체</i> 있을수
                있습니다. 양해부탁드립니다.
              </li>
              <li>
                4. <i>풋살화</i>착용 권장합니다. <i>장난</i>플레이는 금지합니다.
              </li>

              <li>
                5. 흡연구역은 흡역구역 안에서만 가능합니다. 걸리면 과태료
                10만원입니다.
              </li>
              <li>
                * 이외 어기는 사항 생길시 <i>1회 경고 2회 퇴장</i> 조치됩니다.
              </li>
              <li>
                * <i>매너플레이</i> 해주시고 안다치게 재밌게 차시는게
                중요합니다. 구장 내 다쳤을 경우 아무런 책임이 들어가지 않기
                때문에 각별히 주의해주시기 바랍니다.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Section3;
