import React, {useEffect, useState} from 'react';
import Timer from "./Timer";

function ToggleTimerEffect() {
  const [showTimer, setShowTimer] = useState(false);


  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Button</button>
    </div>
  );
}

export default ToggleTimerEffect