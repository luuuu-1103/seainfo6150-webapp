import React from "react";
import "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = ({ buttonText, onClick }) => {
  return (
    
        <button className="button" onClick={onClick}>{buttonText}</button>
   
  );
};

export default ArticleTextToggleButton;