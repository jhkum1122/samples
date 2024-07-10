import React, { useContext } from "react";

const Content = ({ isDark }) => {
  console.log("Content : ");
  console.log("isDark : ", isDark);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgrey",
        color: isDark ? "white" : "black",
      }}
    >
      <p>좋은 하루 되세여!!</p>
    </div>
  );
};

export default Content;
