import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const Page = ({ isDark, setIsDark }) => {
  console.log("Page : ");
  console.log("isDark : ", isDark, ", setIsDark : ", setIsDark);

  return (
    <div>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Page;
