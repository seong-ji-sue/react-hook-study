import React, {useEffect, useState} from 'react';

function Content({isDark}) {
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