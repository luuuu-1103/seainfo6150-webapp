import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <div><h1>{props.article.title}</h1></div>
      <div><i>{props.article.author}</i></div>
      <div><a href="{props.article.authorEmail}">{props.article.authorEmail}</a> </div>
      <div><time dateTime="{props.article.displayDate}">{props.article.displayDate}</time></div>
      <div>{props.article.timeStamp}</div>

      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
