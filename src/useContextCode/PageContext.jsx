import React, {useEffect, useState} from 'react';
import Header from "./elementComponent/Header";
import Footer from "./elementComponent/Footer";
import Content from "./elementComponent/Content";

function PageContext() {
  return (
    <div className={"page"}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default PageContext