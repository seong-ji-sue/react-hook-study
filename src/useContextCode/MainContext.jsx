import React, {useEffect, useState} from 'react';
import PageContext from "./PageContext";
import './MainContext.css'


function MainContext() {

  const [isDark, setIsDark] = useState(false);

  return <PageContext isDark={isDark} setIsDark={setIsDark} />;
}

export default MainContext