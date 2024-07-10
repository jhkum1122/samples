import React from "react";

const Footer = ({ isDark, setIsDark }) => {
  console.log("Footer : ");
  console.log("isDark : ", isDark, ", setIsDark : ", setIsDark);
  function handleClick() {
    setIsDark(!isDark); // 이전 상태의 반전값으로 설정
  }

  return (
    <header
      className="footer"
      style={{ backgroundColor: isDark ? "black" : "lightgrey" }}
    >
      {/* <button className="button" onClick={handleClick}> */}
      <button className="button" onClick={handleClick}>
        Click me!!
      </button>
    </header>
  );
};

export default Footer;
