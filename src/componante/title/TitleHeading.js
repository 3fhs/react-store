import React from "react";

function TitleHeading({ title }) {
  return (
    <div style={headTitle}>
      <h2 style={titleStyle}>{title}</h2>
    </div>
  );
}

const headTitle = {
  marginRight: "20px",
  marginTop: "40px",
};
const titleStyle = {
  color: "var(--primary)",
};

export default TitleHeading;
