import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from "../context/ThemeContext";

function Header() {
  const {isDark} = useContext(ThemeContext);
  return (
    <header
      className={"header"}
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>Welcome ~~~~</h1>
    </header>
  );
}

export default Header