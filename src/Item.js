import "./App.css";

export const Item = ({ title, leftElement, topElement, link }) => {
  return (
    <div className="item" style={{ top: topElement, left: leftElement }}>
    <a href={link} target="_blank">

      {title}
    </a>
    </div>
  );
};
