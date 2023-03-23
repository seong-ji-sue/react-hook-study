import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from "../context/ThemeContext";

function Content() {
  const {isDark} = useContext(ThemeContext);
  return (
    <div
      className={"content"}
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>좋은 하루!</h1>
    </div>
  );
}

export default Content