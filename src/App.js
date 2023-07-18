import logo from "./logo.svg";
import "./App.css";
import road from "./assets/roadmap.png";
import { Item } from "./Item";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const roadMapItems = [
    { title: "Internet", left: "248px", top: "66px", link: "" },
    {
      title: "HTML",
      left: "419px",
      top: "142px",
      link: "https://www.w3schools.com/html/default.asp",
    },
    {
      title: "CSS",
      left: "365px",
      top: "243px",
      link: "https://www.w3schools.com/css/default.asp",
    },
    {
      title: "JavaScript",
      left: "173px",
      top: "238px",
      link: "https://www.w3schools.com/js/default.asp",
    },
    {
      title: "Git",
      left: "42px",
      top: "247px",
      link: "https://www.w3schools.com/git/",
    },
    {
      title: "CSS PreProcessor",
      left: "-58px",
      top: "324px",
      link: "https://www.w3schools.com/sass/",
    },
    {
      title: "Package manager",
      left: "93px",
      top: "414px",
      link: "https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/",
    },
    {
      title: "JS Framework",
      left: "245px",
      top: "414px",
      link: "https://www.w3schools.com/REACT/DEFAULT.ASP",
    },
    {
      title: "CSS Framework",
      left: "354px",
      top: "412px",
      link: "https://tailwindcss.com/",
    },
  ];
  const handleCounting = () => {
    if (count === roadMapItems.length) {
      return;
    }
    setCount((prev) => prev + 1);
  };
  return (
    <div className="App">
      <div className="img-container">
        <img src={road} />
        <button onClick={handleCounting} className="button">
          {count === 0
            ? `start`
            : count !== roadMapItems.length
            ? `next`
            : `finish`}
        </button>
        {roadMapItems.slice(0, count).map((roadMapItem) => (
          <Item
            title={roadMapItem.title}
            leftElement={roadMapItem.left}
            topElement={roadMapItem.top}
            link={roadMapItem.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
