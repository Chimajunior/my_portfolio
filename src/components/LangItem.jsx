import React from "react";
import "../styles/About.css";


function LangItem({ icon, content }) {
  return(
  <div className="langItem">
   <i className="langIcon">{icon}</i>
    <span >{content}</span>
  </div>
  );
}

export default LangItem;
