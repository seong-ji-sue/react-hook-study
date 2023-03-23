import React, {useEffect, useState} from 'react';
import PageContext from "./PageContext";
import './MainContext.css'
import { ThemeContext} from "./context/ThemeContext";

function MainContext() {

  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <PageContext isDark={isDark} setIsDark={setIsDark} />;
    </ThemeContext.Provider>
  )
}

export default MainContext