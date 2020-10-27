import React, { useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import "./ArticleListItem.module.css";

const ArticleListItem = ({ articles }) => {
  const [btnState, SetBtnState] = useState({});

  let keys = [];
  for (const property in articles) {
    keys.push(property);
  }
  let displayContent;

  const handleClick = (id) => {
    SetBtnState({ ...btnState, [id]: !btnState[id] });
  };

  if (articles != null) {
    displayContent = (
      <ul style={{ color: "red" }}>
        {keys.map((item, id) => (
          <li key={id} className="content">
            <h1>{articles[item].title}</h1>
            <p>{btnState[id] ? articles[item].shortText : null}</p>
            <p className="date">
              {btnState[id] ? articles[item].displayDate : null}
            </p>
            
            <ArticleTextToggleButton
              onClick={() => handleClick(id)}
              buttonText={btnState[id] ? "Show Less" : "Show More"}
            ></ArticleTextToggleButton>
          </li>
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <section>
      <header></header>
      {displayContent}
    </section>
  );
};

export default ArticleListItem;