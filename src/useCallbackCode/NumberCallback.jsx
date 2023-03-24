import React, {useCallback, useEffect, useState} from 'react';

function NumberCallback() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);
  //toggle이 변경되어도 호출 안됨
  const someFunction = useCallback(() => {
    console.log("someFunc: number - " + number)
    return;
  },[number])

  //함수형 컴포넌트는 랜더링시 호출되어 값이 초기화 되기 때문에 number값이 바뀌어도
  //somFuction의 주소값이 바껴서 useEffect가 호출 됨
  useEffect(() => {
    console.log('someFunc이 변셩되었습니다.')
  },[someFunction])

  return (
    <div>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default NumberCallback