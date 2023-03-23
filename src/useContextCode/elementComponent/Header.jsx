import React, {useEffect, useState} from 'react';

function Header({isDark}) {
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