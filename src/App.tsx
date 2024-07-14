import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/Section6";

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
};

const credits: Credits = {
  enabled: false,
  label: "",
  position: "left",
};

function App() {
  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      credits={credits}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
