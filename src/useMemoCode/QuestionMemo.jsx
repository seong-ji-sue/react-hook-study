import React, {useEffect, useMemo, useState} from 'react';

function QuestionMemo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(false);
  // const location = isKorea ?
  //초기화될 때 주소값이 달라지기 때문에 계속 불림
  // const location = {
  //   country: isKorea ? '한국' : '외국'
  // }

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국'
    }
  }, [isKorea])

  useEffect(() => {

  },[location])

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느나라?</h2>
      <p>나라 : {location}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 탐</button>

    </div>
  );
}

export default QuestionMemo