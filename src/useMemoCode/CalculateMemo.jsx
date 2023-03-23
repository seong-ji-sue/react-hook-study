import React, {useEffect, useMemo, useState} from 'react';

const hardCalculate = (number) => {
  for(let i=0; i<999999; i++){}//웨이팅시간
  return number + 10000
}

const easyCalculate = (number) => {
  return number + 10000
}

function CalculateMemo() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  // const hardSum = hardCalculate(hardNumber);//easyNumber 값이 변경 되어도 초기화 때문에 호출
  //hardNumber가 변경 될 때만 호출
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber)
  },[hardNumber])

  const easySum = useMemo(() => {
    return easyCalculate(easyNumber)
  },[easyNumber])

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type={"number"}
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span>+10000 = {hardSum}</span>
      <h3>쉬운 계산기</h3>
      <input
        type={"number"}
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+10000 = {easySum}</span>
    </div>
  );
}

export default CalculateMemo