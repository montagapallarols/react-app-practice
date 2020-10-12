import React from "react";

function Title(props) {
  return (
    <div>
      <h1>{props.content}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default Title;
