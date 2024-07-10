import React, { useContext } from "react";

const Header = ({ isDark }) => {
  console.log("Header : ");
  console.log("isDark : ", isDark);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgrey",
        color: isDark ? "black" : "lightgrey",
      }}
    >
      <h1>Wellcome!!</h1>
    </header>
  );
};

export default Header;
