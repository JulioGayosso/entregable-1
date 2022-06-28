import React  from "react";


const QuoteBox = ({propButtons,propColor}) => {
  
  return (
    <div className="card">
      <i style={{ color: propColor }} className="fa-solid fa-quote-left"></i>
      <article style={{ color: propColor }}>
        <div onClick={propButtons} style={{ backgroundColor: propColor }}></div>
      </article>
    </div>
  );
};
export default QuoteBox;
