import React, {useEffect, useRef, useState} from 'react';

function CountRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0); //{current : 0}
  // const [renderCount, setRenderCount] = useState(1);
  const renderRef = useRef(0)
  let countVar = 0;

  //값 변경 시 랜더링, 다른 state 변경시 초기화
  const increaseCountState = () => {
    setCount(count + 1);
  }
  //다른 state 랜더링 되도 값 유지, 값 변경시 랜더링 안함
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1
  }
  //state 랜더링 되면 초기화
  const increaseCountVar = () => {
    countVar = countVar + 1
  }

  //무한루프
  //count state 값 변경 -> useEffect 실행 -> render 값 변경 -> useEffect 실행
  useEffect(() => {
    // setRenderCount(renderCount +1)
    renderRef.current = renderRef.current +1
  })

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={increaseCountState}>State 증가</button>
      <button onClick={increaseCountRef}>Ref 증가</button>
      <button onClick={increaseCountVar}>변수 증가</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>무한루프 고고</button>
    </div>
  );
}

export default CountRef