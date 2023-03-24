import React, {useCallback, useEffect, useState} from 'react';
import Box from "./Box";

function SizeCallback() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);
  //size가 변경 때만 호출, isDark는 아님
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`
    }
  },[size])

  return (
    <div style={{
     background: isDark ? 'black' : 'white'
    }}>
      <input
        type={"number"}
        value={size}
        onChange={(e) =>setSize(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default SizeCallback