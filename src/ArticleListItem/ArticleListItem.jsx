import React from "react";

const ArticleListItem = ({ articles }) => {
  let keys = [];
  for (const property in articles) {
    keys.push(property);
  }
  let displayContent;

  if (articles != null) {
    displayContent = (
      <ul>
        {keys.map((item, id) => (
          <li key={id}>
            <h1>{articles[item].title}</h1>
            <p>{articles[item].shortText}</p>
            <p>{articles[item].displayDate}</p>
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