import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const Page = ({ isDark, setIsDark }) => {
  return (
    <div>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Page;
