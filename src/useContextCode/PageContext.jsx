import React, {useEffect, useState} from 'react';
import Header from "./elementComponent/Header";
import Footer from "./elementComponent/Footer";
import Content from "./elementComponent/Content";

function PageContext({isDark, setIsDark}) {
  return (
    <div className={"page"}>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark}/>
    </div>
  );
}

export default PageContext