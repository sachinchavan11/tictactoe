import React from "react";
import "./styles.css";
const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "120px",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="sqaure_container"
    >
      <h2>{props.value}</h2>
    </div>
  );
};
export default Square;
