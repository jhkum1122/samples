import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import Page from "./components/page";

function UseContextApp() {
  const [isDark, setIsDark] = useState(false);

  return <Page isDark={isDark} setIsDark={setIsDark} />;
  // return <Page />;
}

export default UseContextApp;
